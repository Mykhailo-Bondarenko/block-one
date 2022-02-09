"use strict";
//* task 1
// Написать функцию которая проверяет являются две строки анаграммой или нет

function checkIsAnagramma(strOne, strTwo) {
  if (strOne.length !== strTwo.length) {
    return false;
  }
  let counterOne = 0,
    counterTwo = 0;
  for (let i = 0; i < strOne.length; i++) {
    let letterOne = strOne[i];
    for (let j = 0; j < strTwo.length; j++) {
      let letterTwo = strOne[j];
      if (letterOne === letterTwo) {
        counterOne++;
      }
      letterTwo = strTwo[j];
      if (letterOne === letterTwo) {
        counterTwo++;
      }
    }
    if (counterOne !== counterTwo) {
      return false;
    }
  }
  return true;
}

//* task 2

//* task 3
// Написать функцию которая вычисляет подсчет количество цифр в числе. Реализовать с помощью рекурсии.

function lengthNumber(number) {
  let result = 0;
  if (number < 0) {
    number *= -1;
  }
  for (let i = number; i > 1; i++) {
    ++result;
    i = Math.floor(i / 10);
  }
  return result;
}

function lengthNumberRecursion(number, result) {
  result = result || 1;
  if (number < 0) {
    number *= -1;
  }
  if (number < 10) {
    return result;
  }
  return lengthNumberRecursion(number / 10, ++result);
}

//* task 4
// Реализовать функцию которая проверяет, является ли строка палиндромом

function checkIsPolindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

//* task 5
// Написать функцию которая вычисляет подсчет уникальных слов в предложении

function countUniqueWords(str) {
  return new Set(str.replaceAll(/[^a-zа-яё]\s/gi, '').split(' ')).size;
}

//* task 6
// Написать функцию которая вычисляет вхождение каждого слова в предложение

function countWords(str) {
  const countWords = {},
    arrayWords = str.split(' ');
  for (const item of arrayWords) {
    countWords[item] ? countWords[item]++ : countWords[item] = 1;
  }
  return countWords;
}

//* task 7
//Вычислить периметр и площадь для прямоугольника, треугольника и круга. С помощью конструктора и классов.

class Rectangle {
  constructor(width, heigth) {
    this.width = width;
    this.heigth = heigth;
  };
  perimeter() {
    return (this.width + this.heigth) * 2;
  };
  square() {
    return this.width * this.heigth;
  };
};

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
  };
  perimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  };
  square() {
    return Math.sqrt(
      this.perimeter()
      * (this.perimeter() - this.firstSide)
      * (this.perimeter() - this.secondSide)
      * (this.perimeter() - this.thirdSide));
  };
};

class Сircle {
  constructor(diameter) {
    this.diameter = diameter;
  };
  perimeter() {
    return Math.PI * this.diameter;
  };
  square() {
    return (this.perimeter() * this.diameter) / 4;
  };
};

function Rectangle(width, heigth) {
  this.width = width;
  this.heigth = heigth;
  this.perimeter = () => {
    return (this.width + this.heigth) * 2;
  };
  this.square = () => {
    return this.width * this.heigth;
  };
}

function Triangle(firstSide, secondSide, thirdSide) {
  this.firstSide = firstSide;
  this.secondSide = secondSide;
  this.thirdSide = thirdSide;
  this.perimeter = () => {
    return this.firstSide + this.secondSide + this.thirdSide;
  };
  this.square = () => {
    return Math.sqrt(
      this.perimeter()
      * (this.perimeter() - this.firstSide)
      * (this.perimeter() - this.secondSide)
      * (this.perimeter() - this.thirdSide));
  };
}

function Сircle(diameter) {
  this.diameter = diameter;
  this.perimeter = () => {
    return Math.PI * this.diameter;
  };
  this.square = () => {
    return (this.perimeter() * this.diameter) / 4;
  };
}

//* task 8
// Вычислить факториал числа. Реализовать с помощью рекурсии. Реализовать мемоизированную функцию вычисления факториала.

function factorialNumber(number) {
  let result = 1;
  if (number < 0) {
    return 0;
  }
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

function factorialNumberRecursion(number) {
  if (number < 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  } else {
    return number * factorialNumberRecursion(number - 1);
  }
}

function memoized(callback) {
  let memo = {};
  return (...args) => {
    let num = args[0];
    if (num in memo) {
      return memo[num];
    }
    let result = callback(num);
    memo[num] = result;
    return result;
  };
}

const factorial = memoized((num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
});

//* task 9
// Посчитать сумму всех элементов массива, только тех которые (Кратные двум, кратные трем, которые только положительные и нечетные), реализовать с помощью рекурсии для одномерного массива.

function sumNumbers(array, callback) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      sum += array[i];
    }
  }
  return sum;
}

function sumNumbersRecursion(array, callback, sum, i) {
  sum = sum || 0;
  i = i || 0;
  if (i < array.length) {
    if (callback(array[i])) {
      sum += array[i];
    }
    return sumNumbersRecursion(array, callback, sum, ++i);
  }
  return sum;
}

//* task 10
// Посчитать количество элементов массива которые (Нулевые, отрицательные, положительные, простые числа)

const checkIsSimpleNumber = (num) => (num > 2 && num % 2 === 0) ? false : num > 1;

function countNumbers(array, callback) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result++;
    }
  }
  return result;
}

//* task 11
// Написать функции которые преобразовывают число из десятичной системы счисления в двоичную и в обратную сторону. (Достаточно написать для целых положительных чисел)

function transformBinary(number) {
  let result = '',
    tmp = 0;
  while (number > 0) {
    tmp = number % 2;
    result = tmp + result;
    number = Math.floor(number / 2);
  }
  return result;
}

function trasformDecimal(str) {
  let result = 0,
    length = str.length;
  for (let i = 0; i < str.length; i++) {
    result += str[i] * 2 ** (--length);
  }
  return result;
}

//* task 12 
// Пункты 9 и 10 выполнить для двумерных массивов.
//* task 12.9

function sumNumbers(array, callback) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (callback(array[i][j])) {
        sum += array[i][j];
      }
    }
  }
  return sum;
}

//* task12.10

function сountNumbers(array, callback) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++)
      if (callback(array[i][j])) {
        result++;
      }
  }
  return result;
}

//* task 13 
// Посчитать сумму значений чисел от min до max (всех, только тех которые кратны 3, только положительные). Нарисовать блок схему. Реализовать также с помощью рекурсии.

function sumNumbersRange(min, max, callback) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (callback(i)) {
      sum += i;
    }
  }
  return sum;
}

function sumNumbersRangeRecursion(min, max, callback, sum) {
  sum = sum || 0;
  while (min <= max) {
    if (callback(min)) {
      sum += min;
    }
    return sumNumbersRangeRecursion(++min, max, callback, sum);
  }
  return sum;
}


//* task 14
// Найти среднее значение всех элементов одномерного/двумерного массива (Среднее только тех которые четные и которые не четные).

function averageNumber(array, callback) {
  let result = 0,
    counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result += array[i];
      counter++;
    }
  }
  return result / counter;
}

function averageNumber(array, callback) {
  let result = 0,
    counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (callback(array[i][j])) {
        result += array[i][j];
        counter++;
      }
    }
  }
  return result / counter;
}

//* task 15
// Транспонировать матрицу, сложить две матрицы.

function transportMatrix(array) {
  let result = [];
  for (let i = 0; i < array[0].length; i++) {
    result[i] = [];
    for (let j = 0; j < array[1].length; j++) {
      result[i][j] = array[j][i];
    }
  }
  return result;
}

function sumTwoMatrix(arrayOne, arrayTwo) {
  let result = [];
  for (let i = 0; i < arrayOne.length; i++) {
    result[i] = [];
    for (let j = 0; j < arrayOne[0].length; j++) {
      result[i][j] = arrayOne[i][j] + arrayTwo[i][j];
    }
  }
  return result;
}

// * task 16
// Удалить из двумерного массива строку в которой присутствует хотя бы один нулевой элемент. Для столбца аналогично реализовать.

function deleteRowMatrix(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(0)) {
      array.splice(i, 1)
      i--;
    }
  }
  return array;
}

function deleteColumnMatrix(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        for (let k = 0; k < array.length; k++) {
          array[k].splice(j, 1);
        }
      }
    }
  }
  return array;
}

//* task 17

// Посчитать сумму / количество нулевых элементов / среднее значение элементов матрицы над и под главной диагональю и на главной диагонали.

function findSumDiagonal(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i][i];
  }
  return sum;
}

function findSumAboveDiagonal(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

function findSumUnderDiagonal(array) {
  let sum = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

function findAmountZeroDiagonal(array) {
  let amount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i][i] === 0) {
      amount++;
    }
  }
  return amount;
}

function findAmounZeroAboveDiagonal(array) {
  let amount = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        amount++;
      }
    }
  }
  return amount;
}

function findAmountZeroUnderDiagonal(array) {
  let amount = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i][j] === 0) {
        amount++;
      }
    }
  }
  return amount;
}

function findAverageDiagonal(array) {
  let sum = 0,
    counter = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i][i];
    counter++
  }
  return sum / counter;
}

function findAverageAboveDiagonal(array) {
  let sum = 0,
    counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array[i].length; j++) {
      sum += array[i][j];
      counter++;
    }
  }
  return sum / counter;
}

function findAverageUnderDiagonal(array) {
  let sum = 0,
    counter = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      sum += array[i][j];
      counter++;
    }
  }
  return sum / counter;
}

//* task 18
// Создать итерируемый объект, который на каждой итерации возвращает следующее значение числа фибоначчи (Реализовать с помощью итератора и генератора). Реализовать мемоизированную функцию. Реализовать с помощью рекурсии.

function arrayFibonacci(num) {
  const result = [0, 1];
  for (var i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

function* numberFibonacci() {
  const result = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  for (let i = 0; i < result.length; i++) {
    yield result[i];
  }
}

function numbersFibonacci() {
  let numOne = 0,
    numTwo = 1;
  const max = Number.MAX_SAFE_INTEGER;
  return {
    next() {
      let nextNumber = (numTwo === 0) ? 1 : numOne + numTwo;
      let prevNumber = numTwo;
      numTwo = nextNumber;
      numOne = prevNumber;
      let flag = false;
      if (nextNumber >= max) {
        nextNumber = undefined;
        flag = true;
      }
      return { value: nextNumber, done: flag };
    }
  };
}

function numberFibonacciRecursion(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return numberFibonacciRecursion(num - 1)
    + numberFibonacciRecursion(num - 2);
}

function numberFibonacci(num) {
  let numOne = 0,
    numTwo = 1,
    result = 1;
  for (let i = 1; i <= num; i++) {
    result = numOne + numTwo;
    numOne = numTwo;
    numTwo = result;
  }
  return result;
}

const memoFibonacci = (function () {
  const memo = {};
  return function func(num) {
    let result;
    if (num in memo) {
      return memo[num];
    }
    if (num === 0 || num === 1) {
      return 1;
    }
    result = func(num - 1) + func(num - 2);
    memo[num] = result;
    return result;
  }
})();

//* task 19
// Реализовать с помощью итератора и генератора светофор. При каждой следующей итерации мы должны получать следующий корректный цвет по логике светофора.

const trafficColors = {
  [Symbol.iterator]: function* () {
    const colors = ['red', 'yellow', 'green', 'yellow'];
    let counter = 0;
    while (counter < 5) {
      for (let i = 0; i < colors.length; i++) {
        yield colors[i];
      }
      counter++;
    }
  }
}

function* generateTrafficColors() {
  const colors = ['red', 'yellow', 'green', 'yellow'];
  for (const value in colors) {
    while (value <= colors.length) {
      for (let i = 0; i < colors.length; i++) {
        yield colors[i];
      }
    }
  }
}

//* task 20
// Определить является ли число отрицательным или положительным без сравнения на больше/меньше нуля (побитово). Посчитать количество битов числа которые установлены в единицу и которые установлены в 0. Написать свою реализацию для ~, двумя способами).