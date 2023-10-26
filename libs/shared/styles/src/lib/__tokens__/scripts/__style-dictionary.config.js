const StyleDictionary = require('style-dictionary');

const BUILD_PATH = 'src/lib/__generated';

module.exports = {
  source: ['src/lib/__tokens__/**/test.tokens.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: `${BUILD_PATH}/`,
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/module',
        },
      ],
      transforms: ['name/cti/camel', 'color/hsl-4'],
    },
    css: {
      transformGroup: 'cssExtended',
      buildPath: `${BUILD_PATH}/css/`,
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
        },
      ],
      // transforms: ['name/cti/kebab', 'color/hsl-4', 'size/pxToRem'],
      transforms: ['font/web'],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: `${BUILD_PATH}/scss/`,
      files: [
        {
          destination: 'index.scss',
          format: 'scss/variables',
        },
      ],
      // transforms: ['name/cti/snake', 'color/hsl-4', 'size/rem'],
    },
  },
};
