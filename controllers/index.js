const fse = require('fs-extra')

const files = fse.readdirSync(__dirname).filter(file => {
  return file !== 'index.js'
})

const controllers = {}
for (const file of files) {
  if (file.toLocaleLowerCase().endsWith('js')) {
    const controller = require(`./${file}`)
    controllers[`${file.replace(/\.js/, '')}`] = controller
  }
}

module.exports = controllers
