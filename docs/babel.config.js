// eslint-disable-next-line
const bpmr = require('babel-plugin-module-resolver')

function resolvePath(sourcePath, currentFile, opts) {
  // if (sourcePath === 'markdown') {
  //   const base = currentFile.substring(__dirname.length).slice(0, -3)
  //   return `${__dirname}/docs/src/${base}/`
  // }

  return bpmr.resolvePath(sourcePath, currentFile, opts)
}

// ? We don't want to transpile other packages source code, just
// ? link locally for developpment ease. Each package is in charge
// ? of hot-reloading and re-transpiling.
const alias = {
  '@ambler/andive': '../packages/andive/dist',
  docs: './'
}

module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias,
        transformFunctions: ['require', 'require.context'],
        resolvePath
      }
    ],
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              cleanupIDs: {
                minify: false
              }
            }
          ]
        }
      }
    ]
  ]
}
