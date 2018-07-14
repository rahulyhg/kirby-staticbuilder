<?php

/**
 * Kirby StaticBuilder Plugin
 * @file Main plugin file when installed manually or with Kirby’s CLI. Not used with Composer.
 */

// Using kirby’s autoloader helper
load([
  'fvsch\\kirbystaticbuilder\\builder' => __DIR__ . '/src/Builder.php',
  'fvsch\\kirbystaticbuilder\\plugin'  => __DIR__ . '/src/Plugin.php'
]);

fvsch\KirbyStaticBuilder\Plugin::register();
