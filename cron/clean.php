<?php

require_once('../app-config.php');

/**
 * Redditbooru data cleaner
 */

function cleanThumbnailCache() {

    $dir = opendir(THUMBNAIL_STORAGE);
    $files = 0;
    $bytes = 0;

    echo 'Performing thumbnail cache cleanup...', PHP_EOL;

    if ($dir) {
        while ($file = readdir($dir)) {
            $path = THUMBNAIL_STORAGE . $file;
            if (is_file($path) && (filemtime($path) + MAX_THUMBNAIL_DATE) < time()) {
                $files++;
                $bytes += filesize($path);
                echo 'Deleting thumbnail ', $file, PHP_EOL;
                unlink($path);
            }
        }
    }

    echo 'Cleaned ', $files, ' files/', round($bytes / 1024), 'Kb', PHP_EOL;

}

cleanThumbnailCache();