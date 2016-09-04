<?php

namespace Controller {

  use Lib;
  use Imagick;
  use ImagickPixel;

  class Thumb implements Page {

    public static function render() {

      $file = Lib\Url::Get('file', null);

      if (!$file) {
        http_response_code(404);
        exit;
      } else {
        self::createThumbFromEncodedFilename($file);
      }

    }

    /**
     * Given a thumbnail request, derive the thumbnail attributes and create the thumbnail
     */
    public static function createThumbFromEncodedFilename($file) {

      // If a height and width were passed, resize and such. Otherise, just pass the data through
      if (preg_match('/([\w\\_\-\+]+)_([\d]+)_([\d]+)\.jpg/i', $file, $matches)) {
        $url = self::decodeThumbFilename($matches[1]);
        self::createThumbnail($url, (int) $matches[2], (int) $matches[3]);
      } else {
        $bits = explode('.', $file);
        self::passThrough(base64_decode($bits[0]));
      }
    }

    /**
     * Encodes a URL for the cache filename
     */
    public static function createThumbFilename($url) {
      return THUMBNAIL_PATH . str_replace([ '=', '/' ], [ '-', '_' ], base64_encode($url));
    }

    /**
     * Decodes an encoded thumbnail URL
     */
    public static function decodeThumbFilename($url) {
      $url = str_replace(THUMBNAIL_PATH, '', $url);
      return base64_decode(str_replace([ '-', '_' ], [ '=', '/' ], $url));
    }

    /**
     * Creates a thumbnail of the URL at the specified width and height the saves/displays it
     */
    public static function createThumbnail($url, $width, $height) {

      $thumbPath = Lib\ImageLoader::createThumbnail($url, $width, $height);
      if ($thumbPath !== null) {
          header('Content-Type: image/jpeg');
          readfile($thumbPath);
          exit;
      }

      header("HTTP/1.0 404 File Not Found");
    }

    public static function passThrough($url) {
      $image = Lib\ImageLoader::fetchImage($url);
      if ($image) {
        $contentType = 'image/';
        switch ($image->type) {
          case IMAGE_TYPE_JPEG:
            $contentType .= 'jpeg';
            break;
          case IMAGE_TYPE_GIF:
          case IMAGE_TYPE_PNG:
            $contentType .= $image->type;
        }

        file_put_contents(Lib\ImageLoader::createThumbFilenamePath($url) . '.jpg', $image->data);

        header('Content-Type: ' . $contentType);
        echo $image->data;
        exit;
      }
    }

  }

}
