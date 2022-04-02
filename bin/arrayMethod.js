import chalk from 'chalk'

export const arr = {
  add: [
    {
      name: 'splice',
      shortDesc: '向数组中添加元素',
      desc: 'Adds and/or removes elements from an array.',
      example: `arr.splice(2, 0, 'tacos');
console.log(arr);`,
      output: `[5, 1, 'tacos', 8]`,
    },
    {
      name: 'push',
      shortDesc: '将元素添加到数组的末尾',
      desc: 'Adds one or more elements to the end of an array and returns the new length of the array.',
      example: `arr.push(2);
console.log(arr);`,
      output: '[5, 1, 8, 2]',
    },
    {
      name: 'unshift',
      shortDesc: '将元素添加到数组的前面',
      desc: 'Adds one or more elements to the front of an array and returns the new length of the array.',
      example: `arr.unshift(2, 7);
console.log(arr);`,
      output: '[2, 7, 5, 1, 8]',
    },
    {
      name: 'concat',
      shortDesc: '将此数组添加到其他数组和/或值',
      desc: 'Returns a new array comprised of this array joined with other array(s) and/or value(s).',
      example: `let arr2 = ['a', 'b', 'c'];
let arr3 = arr.concat(arr2);
console.log(arr3);`,
      output: `[5, 1, 8, 'a', 'b', 'c']`,
    },
  ],
  remove: [
    {
      name: 'splice',
      shortDesc: '从数组中删除元素',
      desc: 'Adds and/or removes elements from an array.',
      example: `arr.splice(2, 1);
console.log(arr);`,
      output: `[5, 1]`,
    },
    {
      name: 'pop',
      shortDesc: '删除数组的最后一个元素',
      desc: 'Removes the last element from an array and returns that element.',
      example: `arr.pop();
console.log(arr);`,
      output: `[5, 1]`,
    },
    {
      name: 'shift',
      shortDesc: '移除数组的第一个元素',
      desc: 'Removes the first element from an array and returns that element.',
      example: `arr.shift();
console.log(arr);`,
      output: `[1, 8]`,
    },
    {
      name: 'slice',
      shortDesc: '移除一个或多个元素以供使用，使阵列保持原样',
      desc: `The ${chalk.cyan(
        'slice()'
      )} method returns a shallow copy of a portion of an array into a new array object. You can specify either just the beginning element (where end will default to the arrays length) or both the beginning and the end, comma-separated. The original array will not be modified.`,
      example: `let slicedArr = arr.slice(1);
console.log(arr);
console.log(slicedArr);`,
      output: `[5, 1, 8]
[1, 8]`,
    },
  ],
  string: [
    {
      name: 'join',
      shortDesc: '将数组的所有元素连接成一个字符串',
      desc: `Joins all elements of an array into a string. You can join it together as is or with something in between, ${chalk.cyan(
        `elements.join(' - ')`
      )} gives you ${chalk.cyan('foo - bar')}`,
      example: `console.log(arr.join());`,
      output: `"5,1,8"`,
    },
    {
      name: 'toString',
      shortDesc: '返回表示数组的字符串',
      desc: 'Returns a string representing the array and its elements.',
      example: `console.log(arr.toString());`,
      output: `"5,1,8"`,
    },
    {
      name: 'toLocaleString',
      shortDesc: '返回表示数组的本地化字符串。',
      desc: 'This one is a bit wacko. Returns a localized string representing the array and its elements. This is very useful for dates and currency and has some strange native abstractions, so best to consult the docs when using it',
      example: `let date = [new Date()];
const arrString = arr.toLocaleString();
const dateString = date.toLocaleString();
console.log(arrString, dateString);`,
      output: `"5,1,8 12/26/2017, 6:54:49 PM"`,
    },
  ],
  order: [
    {
      name: 'reverse',
      shortDesc: '颠倒数组的顺序',
      desc: 'Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.',
      example: `arr.reverse();
console.log(arr);`,
      output: `[8, 1, 5]`,
    },
    {
      name: 'sort',
      shortDesc: '对数组中的项进行排序',
      desc: `Sorts the elements of an array in place and returns the array.

${chalk.bold(
  'Important note:'
)} If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order. The docs have more information to clarify.`,
      example: `arr.sort();
console.log(arr);`,
      output: `[1, 5, 8]`,
    },
  ],
  other: [
    {
      name: 'length',
      shortDesc: '求数组的长度',
      desc: 'Returns the number of elements in that array.',
      example: `console.log(arr.length);`,
      output: `3`,
    },
    {
      name: 'fill',
      shortDesc: '用静态值填充数组的所有元素',
      desc: 'Fills all the elements of an array from a start index to an end index with a static value.',
      example: `arr.fill(2);
console.log(arr);`,
      output: `[2, 2, 2]`,
    },
    {
      name: 'copyWithin',
      shortDesc: '复制数组中的数组元素序列。',
      desc: 'Copies a sequence of array elements within the array. You can specify either just the ending element (where begin will default to zero) or both the beginning and the end, comma-separated.',
      example: `arr.copyWithin(1);
console.log(arr);`,
      output: `[5, 5, 1]`,
    },
  ],
  iterate: [
    {
      name: 'forEach',
      shortDesc: '执行我将为每个元素创建的函数',
      desc: 'The forEach() method executes a provided function once for each array element.',
      example: `arr.forEach((element) => {
  console.log(element)
});`,
      output: `5
1
8`,
    },
    {
      name: 'map',
      shortDesc: '使用我创建的函数从每个元素创建一个新数组',
      desc: 'Creates a new array with the results of calling a provided function on every element in this array.',
      example: `let map = arr.map(x => x + 1);
console.log(map);`,
      output: `[6, 2, 9]`,
    },
    {
      name: 'reduce',
      shortDesc: '遍历数组，并将其缩减为单个值、对象或数组',
      desc: 'Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.',
      example: `let reducer = (a, b) => a + b;
console.log(arr.reduce(reducer));`,
      output: `14`,
    },
    {
      name: 'entries',
      shortDesc: '创建迭代器对象',
      desc: `Returns a new Array Iterator object that contains the key/value pairs for each index in the array. There are a lot of uses for iterators, as well as other methods used with it in conjuction, like ${chalk.cyan(
        'values'
      )} and ${chalk.cyan('keys')}`,
      example: `let iterator = arr.entries();
console.log(iterator.next().value);`,
      output: `[0, 5]
// the 0 is the index,
// the 5 is the first number`,
    },
  ],
  find: {
    single: [
      {
        name: 'includes',
        shortDesc: '找出某个元素是否存在',
        desc: 'Determines whether an array contains a certain element, returning true or false as appropriate.',
        example: `console.log(arr.includes(1));`,
        output: `true`,
      },
      {
        name: 'indexOf',
        shortDesc: '查找特定项的第一个索引',
        desc: 'Returns the first index at which a given element can be found in the array, or -1 if it is not present.',
        example: `console.log(arr.indexOf(5));`,
        output: `0`,
      },
      {
        name: 'lastIndexOf',
        shortDesc: '查找特定项的最后一个索引',
        desc: 'Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.',
        example: `console.log(arr.lastIndexOf(5));`,
        output: `0`,
      },
      {
        name: 'find',
        shortDesc: '找到满足条件的第一个元素',
        desc: `Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found. Similar to ${chalk.cyan(
          'findIndex()'
        )}, but it returns the item instead of the index.`,
        example: `let isTiny = (el) => el < 2;
  console.log(arr.find(isTiny));`,
        output: `1`,
      },
      {
        name: 'findIndex',
        shortDesc: '找到满足条件的项的第一个索引',
        desc: `Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned. Similar to ${chalk.cyan(
          'find()'
        )}, but it returns the index instead of the item.`,
        example: `let isBig = (el) => el > 6;
  console.log(arr.findIndex(isBig));`,
        output: `2`,
      },
      {
        name: 'reduce',
        shortDesc: '通过减少数组找到一个值，从头到尾',
        desc: 'Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.',
        example: `let reducer = (a, b) => a + b;
  console.log(arr.reduce(reducer));`,
        output: `14`,
      },
      {
        name: 'reduceRight',
        shortDesc: '通过减少数组找到一个值，从“完成”到“开始”',
        desc: 'Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.',
        example: `[arr, [0, 1]].reduceRight((a, b) => {
    return a.concat(b)
  }, [])`,
        output: `[0, 1, 5, 1, 8]`,
      },
    ],
    many: [
      {
        name: 'filter',
        shortDesc: '根据我创建的条件筛选值',
        desc: 'Creates a new array with all of the elements of this array for which the provided filtering function returns true.',
        example: `let filtered = arr.filter(el => el > 4);
  console.log(filtered)`,
        output: `[5, 8]`,
      },
      {
        name: 'every',
        shortDesc: '找出每一项是否都满足一个条件',
        desc: 'Returns true if every element in this array satisfies the provided testing function.',
        example: `let isSmall = (el) => el < 10;
  console.log(arr.every(isSmall));`,
        output: `true`,
      },
      {
        name: 'some',
        shortDesc: '找出是否至少有一项满足条件',
        desc: 'Returns true if at least one element in this array satisfies the provided testing function.',
        example: `let biggerThan4 = (el) => el > 4;
  console.log(arr.some(biggerThan4));`,
        output: `true`,
      },
    ],
  },
}
