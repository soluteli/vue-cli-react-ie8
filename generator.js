const data = {allPagesPath:
  [ { pageVar: 'v0',
      file:
       '/Users/soluteli/coding/servyou/servyou-kpi/cli/servyou-chase-ui/components/a-tree/index.example.jsx' },
    { pageVar: 'v1',
      file:
       '/Users/soluteli/coding/servyou/servyou-kpi/cli/servyou-chase-ui/components/button/index.example.jsx' },
    { pageVar: 'v2',
      file:
       '/Users/soluteli/coding/servyou/servyou-kpi/cli/servyou-chase-ui/components/input/index.example.jsx' } ],
       allPagesVars: [
        {
          title: "tree",
          vars: [
            "v0",
          ],
        },
        {
          title: "按钮",
          vars: [
            "v1",
          ],
        },
        {
          title: "输入框",
          vars: [
            "v2",
          ],
        },
      ]
}

const path= require('path')
const fsPromises = require('fs').promises
const fsExtra = require('fs-extra')
const ejs = require('ejs')

const templateFilePath = path.join(process.cwd(), 'template', 'routerData.ejs')

ejs.renderFile(templateFilePath, {...data}, async function (err, _data) {
  console.log(data)
  // await fsExtra.ensureFile('.tmp/routerData.js')
  await fsPromises.writeFile('.tmp/routerData.js', _data)
  console.log('success')
})
