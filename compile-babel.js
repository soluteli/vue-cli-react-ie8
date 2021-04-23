const util = require('util');
const path = require('path')
const rimraf = require('rimraf')
const globby = require('globby');
const { exec } = require('child_process');
const fs = require('fs')
const fsPromises = fs.promises
const fsExtra = require('fs-extra')
const execAsync = util.promisify(exec);
const rimrafAsync = util.promisify(rimraf);
const transformFileAsync = util.promisify(require('@babel/core').transformFile)


const source_componentsDir = 'components'
const tmp_componentsDir = '.tmp'

async function compileWithcli () {
  /**
   * babel-cli 参数
   *  --delete-dir-on-start
   *  --no-babelrc
   *  --verbose
   *  --out-dir | -d
   *  --keep-file-extension
   * plugins
   *  1. @umijs/babel-preset-umi/node.js
   * 
  */
  await execAsync(
    `babel --verbose -delete-dir-on-start  --no-babelrc ${source_componentsDir} --out-dir ${tmp_componentsDir}  --presets @babel/preset-react --plugins @babel/plugin-transform-modules-commonjs`
  )
}

async function _transpileFile (sourceFile, targetFile) {
  const result = await transformFileAsync(sourceFile, {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: false,
          // corejs: '3',
          "modules": "commonjs"
        },
      ],
      '@babel/preset-react'
    ],
    // plugins: ['@babel/plugin-transform-modules-commonjs'],
    configFile: false
  })
  await fsExtra.ensureFile(targetFile)
  await fsPromises.writeFile(targetFile, result.code)

}

async function compile (sourceDir, distDir) {
  await rimrafAsync(path.join(__dirname, distDir))
  const sourceFiles = await globby(`./${sourceDir}/**/*.js?(x)`)
  const filesData = sourceFiles.map(s => ({
    source: s,
    target: s
    // target: path.join(process.cwd(), s.replace(/^\./, `${distDir}`).replace(/jsx$/, 'js')),
  }))
  /* map async */
  // await Promise.all(filesData.map(({source, target}) => _transpileFile(source, target)))

  const examplesData = {}
  for (const {source, target} of filesData) {
    if (target.endsWith('example.jsx')) {

      const isExist = fs.existsSync(target)
      // const isAccess = fs.accessSync(target)
      const _data = require(target)

      const { default: metadata } = _data
      
      if (!metadata || !metadata.title) {
        console.log('Example %s should contain export default { title }', target)
        continue
      }

      const { title } = metadata
      const absoluteSource = path.join(process.cwd(), source)
      if (examplesData[title]) {
        examplesData[title].push(absoluteSource)
      } else {
        examplesData[title] = [absoluteSource]
      }
    }
  }

  let count = 0
  const allPagesPath = []
  const allPagesVars = []
  Object.keys(examplesData).forEach((k) => {
    const vars = []
    examplesData[k].forEach((v) => {
      const pageVar = 'v' + (count++)
      vars.push(pageVar)
      allPagesPath.push({
        pageVar,
        file: v
      })
    })
    allPagesVars.push({
      title: k,
      vars
    })
  })

  console.log({allPagesPath, allPagesVars})
  return {allPagesPath, allPagesVars}
}

export default function (params) {
  return compile(source_componentsDir, tmp_componentsDir)
}

