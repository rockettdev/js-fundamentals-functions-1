// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function IncrementOne(num) {
  return num + 1
}
console.log(IncrementOne(1))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function CapitalisationOne(string) {
  const Split = string.split('')
  Split[0] = Split[0].toUpperCase()
  const join = Split.join('')
  return join
}

console.log(CapitalisationOne('hello'))

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function SmileyFace(string) {
  return 'Hi, ' + CapitalisationOne(string) + ' :)'
}

console.log(SmileyFace('Alan'))
// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2-
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function StringArray(array) {
  let Count = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      Count += 1
    }
  }
  return Count
}
console.log(StringArray(['Edward', 1, 3, 'Alan', 'Stu']))
// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

function ObjectCheck(object) {
  if (Object.prototype.hasOwnProperty.call(object, 'edward')) {
    return object
  } else {
    object.edward = 'amazing'
    return object
  }
}

console.log(ObjectCheck({ edward: 'amazing' }))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: IncrementOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: CapitalisationOne, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: SmileyFace, // etc
  d: StringArray,
  e: ObjectCheck
}
