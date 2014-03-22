<?php

// Database credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'USER');
define('DB_PASS', 'PASSWORD');
define('DB_NAME', 'reddit-booru');

define('AWS_KEY', 'KEY');
define('AWS_SECRET', 'SECRET');
define('AWS_ENABLED', true);
define('AWS_BUCKET', 'BUCKET');
define('AWS_PATH', 'PATH/');

// Call me pessimistic, but I don't expect awwnime nor reddit to exist in 20 years
define('AWS_EXPIRATION', 630720000);

define('CDN_BASE_URL', 'http://BASE_URL/');
define('LOCAL_IMAGE_PATH', 'PATH_TO_IMAGES/');

define('REDDIT_TOKEN', 'TOKEN');
define('REDDIT_SECRET', 'SECRET');
define('REDDIT_USER', 'USER_NAME');

define('TUMBLR_CONSUMER_KEY', 'KEY');

// View directory
define('VIEW_PATH', './view/');

define('MONGO_DATABASE', 'redditbooru');

define('HTTP_UA', 'moe downloader by /u/dxprog');