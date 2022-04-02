import chalk from 'chalk'
import inquirer from 'inquirer'
import { store } from './store.js'

const configQuestion = [
  {
    type: 'confirm',
    name: 'confirmStore',
    message: '你想把这个条目保存起来吗？',
    default: false,
  },
  {
    type: 'input',
    name: 'namedConfig',
    message: "你想给它取什么名字？",
    default: "我总是忘记的那个！",
    when(answers) {
      return answers.confirmStore === true
    },
  },
]

export const storeConfig = (finalAnswer) => {
  inquirer.prompt(configQuestion).then((answers) => {
    store.set(answers.namedConfig, finalAnswer)

    if (answers.namedConfig) {
    console.log(`\n太好了，已经为你存储起来了
      你可以通过运行 ` + chalk.magenta('lookup ' + answers.namedConfig) + '\n')
    }
  })
}