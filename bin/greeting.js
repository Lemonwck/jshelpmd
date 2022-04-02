'use strict'
import chalk from 'chalk'
import boxen from 'boxen'
import figures from 'figures'
import wrapAnsi from 'wrap-ansi'
import indentString from 'indent-string'
const log = console.log

export const greeting = () => {
  //create initial message box
  const welcome =
    chalk.yellow(figures.star) +
    chalk.cyan(' 欢迎来到 Javascript 浏览器 ') +
    chalk.yellow(figures.star)

  const welcomeBox = {
    padding: 1,
    margin: 1,
    borderStyle: 'doubleSingle',
    borderColor: 'yellowBright',
    backgroundColor: '#000000',
  }
  const msgBox = boxen(welcome, welcomeBox)

  //create subtitle
  const subtitle = chalk.blueBright.italic(
    '找到你需要的数组方法，而无需翻阅文档\n'
  )
  const wrappedSubtitle = wrapAnsi(subtitle, 35)

  //log them both
  log(msgBox)
  log(indentString(wrappedSubtitle, 8))
}
