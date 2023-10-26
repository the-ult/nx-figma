const StyleDictionary = require('style-dictionary-utils');

const BUILD_PATH = 'src/lib/__generated';

// module.exports =
const myStyleDictionary = StyleDictionary.extend({
  source: ['src/lib/__tokens__/**/adelyn.tokens.json'],
  platforms: {
    // js: {
    //   transformGroup: 'js',
    //   buildPath: `${BUILD_PATH}/`,
    //   files: [
    //     {
    //       destination: 'tokens.js',
    //       format: 'javascript/module',
    //     },
    //   ],
    //   transforms: ['name/cti/camel', 'color/hsl-4'],
    // },
    css: {
      // transformGroup: 'css/extended',
      buildPath: `${BUILD_PATH}/css/`,
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
        },
      ],
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css',
        'color/rgbAlpha',
        'shadow/css',
        'font/css',
        'fontFamily/css',
        'fontWeight/number',
        'cubicBezier/css',
        'border/css',
      ],
    },
    // scss: {
    //   transformGroup: 'scss',
    //   buildPath: `${BUILD_PATH}/scss/`,
    //   files: [
    //     {
    //       destination: 'index.scss',
    //       format: 'scss/variables',
    //     },
    //   ],
    //   transforms: ['name/cti/snake', 'color/hsl-4', 'size/rem'],
    // },
  },
});

myStyleDictionary.buildAllPlatforms();
