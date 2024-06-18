const path = require('path');

const aliasMapping = {
  '@test-utils': (filename) => path.resolve(__dirname, `test-utils/${filename}`),
};

module.exports = {
  plugins: {
    // TODO(Henry): Fix aliasing for postcss.
    'postcss-import': {
      root: path.resolve(__dirname, 'js'),
      path: ["test-utils"],
      skipDuplicates: true,
      resolve: (id, basedir, importOptions) => {
        const [aliasName, filename] = id.split('/');
        return aliasMapping[aliasName](filename);
      }
    },
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    },
  },
}
