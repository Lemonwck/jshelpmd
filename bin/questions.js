import { arr } from './arrayMethod.js'
import { obj } from './objectMethod.js'

//the questions and conditions that will populate inquirer, fed from the array and object JSON
const questions = [
  {
    type: 'list',
    name: 'structure',
    message: '是数组还是对象?',
    choices: ['array', 'object'],
  },
  {
    type: 'list',
    name: 'arrayBasis',
    message: '我有一个数组，我想。。。',
    choices: [
      '添加 items 其他 arrays',
      '删除 items',
      '查找 items',
      'walk over items',
      '返回字符串',
      '数组排序',
      '还有别的吗',
    ],
    when(answers) {
      return answers.structure === 'array'
    },
  },
  {
    type: 'list',
    name: 'find',
    message: `I'm trying to find `,
    choices: ['one item', 'one or many items'],
    when(answers) {
      return answers.arrayBasis === '查找 items'
    },
  },
  {
    type: 'list',
    name: 'objBasis',
    message: '我有个对象，我想。。。',
    choices: [
      '创建一个对象',
      '创建属性',
      '获取有关对象的信息',
      '获取有关属性的信息',
      '限制对对象的更改',
      '从对象创建字符串',
      '管理原型',
    ],
    when(answers) {
      return answers.structure === 'object'
    },
  },
  {
    type: 'list',
    name: 'infoProp',
    message: 'I need to get ',
    choices: [
      'details about the property',
      'a list of all of the keys and/or values',
    ],
    when(answers) {
      return answers.objBasis === '获取有关属性的信息'
    },
  },

  //--- arrays ---//
  createAnswers('add', '添加 items 其他 arrays'),
  createAnswers('remove', '删除 items'),
  createAnswers('iterate', 'walk over items'),
  createAnswers('string', '返回字符串'),
  createAnswers('order', '数组排序'),
  createAnswers('other', '还有别的吗'),
  //arrays with find, which is nested
  createAnswers('single', 'one item', arr.find, 'find'),
  createAnswers('many', 'one or many items', arr.find, 'find'),

  //--- objects ---//
  createAnswers('createObj', '创建一个对象', obj, 'objBasis'),
  createAnswers('createProp', '创建属性', obj, 'objBasis'),
  createAnswers('infoObj', '获取有关对象的信息', obj, 'objBasis'),
  createAnswers('noChange', '限制对对象的更改', obj, 'objBasis'),
  createAnswers(
    'createString',
    '从对象创建字符串',
    obj,
    'objBasis'
  ),
  createAnswers('prototype', '管理原型', obj, 'objBasis'),
  //objects with details, which is nested
  createAnswers(
    'details',
    'details about the property',
    obj.infoProp,
    'infoProp'
  ),
  createAnswers(
    'list',
    'a list of all of the keys and/or values',
    obj.infoProp,
    'infoProp'
  )]

//generate the answer object for all the different options in arrays and object
function createAnswers(
  type,
  prompt,
  structInput = arr,
  answerBasis = 'arrayBasis'
) {
  return {
    type: 'list',
    name: type,
    message: `我需要`,
    choices: structInput[type].map((item) => item.shortDesc),
    when(answers) {
      return answers[answerBasis] === prompt
    }
  }
}

export { questions }
