const path = require('path')
const shell = require('shelljs')
const chalk = require('chalk')

const packageJson = require('../../package.json')

shell.echo(chalk.bold(`${packageJson.name}@${packageJson.version}`))

shell.echo(chalk.gray('\n=> Clean dist.'))
shell.rm('-rf', 'components-dist')

const babel = path.join(__dirname, '../..', 'node_modules', '.bin', 'babel')
const args = [
  '--ignore package.json,server.js,client.js,config.js,node_modules/,tests,test.js,storybook,story.jsx,"*.test.js","*.stories.js"',
  '--plugins "transform-runtime","babel-plugin-add-module-exports"',
  './src --out-dir ./dist',
  '--copy-files',
].join(' ')

const command = `${babel} ${args}`
shell.echo(chalk.gray('\n=> Transpiling "src" into ES5 ...\n'))
shell.echo(chalk.gray(command))
shell.echo('')
const code = shell.exec(command).code
if (code === 0) {
  shell.echo(chalk.gray('\n=> Transpiling completed.'))
} else {
  shell.exit(code)
}

const licence = path.join(__dirname, '../..', 'LICENSE')
shell.echo(chalk.gray('\n=> Copy LICENSE.'))
shell.cp(licence, './')
