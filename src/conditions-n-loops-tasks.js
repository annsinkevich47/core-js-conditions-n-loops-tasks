/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  if (a + b < c || b + c < a || c + a < b) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const arr = ['X', 'IX', 'V', 'IV', 'I'];
  const arr2 = [10, 9, 5, 4, 1];
  let output = '';
  let number = num;
  for (let i = 0; i < arr.length; i += 1) {
    let numberOfRepeats = Math.floor(number / arr2[i]);
    number -= numberOfRepeats * arr2[i];
    while (numberOfRepeats > 0) {
      output += arr[i];
      numberOfRepeats -= 1;
    }
  }
  return output;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let endStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const letter = `${numberStr[i]}`;
    let next = i;
    next += 1;
    switch (letter) {
      case '0':
        endStr += 'zero';
        break;
      case '1':
        endStr += 'one';
        break;
      case '2':
        endStr += 'two';
        break;
      case '3':
        endStr += 'three';
        break;
      case '4':
        endStr += 'four';
        break;
      case '5':
        endStr += 'five';
        break;
      case '6':
        endStr += 'six';
        break;
      case '7':
        endStr += 'seven';
        break;
      case '8':
        endStr += 'eight';
        break;
      case '9':
        endStr += 'nine';
        break;
      case '-':
        endStr += 'minus';
        break;
      case ',':
        endStr += 'point';
        break;
      case '.':
        endStr += 'point';
        break;
      default:
        break;
    }

    if (next !== numberStr.length) {
      endStr += ' ';
    }
  }
  return endStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length - 1; i += 1) {
    const start = str[i];
    const end = str[str.length - i - 1];
    if (start !== end) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  while (number > 0) {
    if (number % 10 === digit) {
      return true;
    }
    number = Math.floor(number / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let firstSum = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      firstSum += arr[j];
    }
    let secondSum = 0;
    for (let l = i + 1; l < arr.length; l += 1) {
      secondSum += arr[l];
    }
    if (firstSum === secondSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const array = [];
  let count = 1;

  let endRow = size - 1;
  let startRow = 0;
  let startColumn = 0;
  let endColumn = size - 1;

  for (let i = 0; i < size; i += 1) {
    array[array.length] = [];
  }

  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      array[startRow][i] = count;
      count += 1;
    }
    startRow += 1;
    for (let i = startRow; i <= endRow; i += 1) {
      array[i][endColumn] = count;
      count += 1;
    }
    endColumn -= 1;
    for (let i = endColumn; i >= startColumn; i -= 1) {
      array[endRow][i] = count;
      count += 1;
    }
    endRow -= 1;
    for (let i = endRow; i >= startRow; i -= 1) {
      array[i][startColumn] = count;
      count += 1;
    }
    startColumn += 1;
  }
  return array;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  let left = 0;
  let right = newMatrix.length - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i += 1) {
      const top = left;
      const bottom = right;
      const leftTop = newMatrix[top][left + i];
      newMatrix[top][left + i] = newMatrix[bottom - i][left];
      newMatrix[bottom - i][left] = newMatrix[bottom][right - i];
      newMatrix[bottom][right - i] = newMatrix[top + i][right];
      newMatrix[top + i][right] = leftTop;
    }
    left += 1;
    right -= 1;
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

function partition(arrNew, start, end) {
  const arr1 = arrNew;
  let newStart = start;
  let newEnd = end;
  const pivotVal = arr1[Math.floor((newStart + newEnd) / 2)];
  while (newStart <= newEnd) {
    while (arr1[newStart] < pivotVal) {
      newStart += 1;
    }
    while (arr1[newEnd] > pivotVal) {
      newEnd -= 1;
    }
    if (newStart <= newEnd) {
      const temp = arr1[newStart];
      arr1[newStart] = arr1[newEnd];
      arr1[newEnd] = temp;
      newStart += 1;
      newEnd -= 1;
    }
  }
  return newStart;
}
function quickSort(newArr, start = 0, end = newArr.length - 1) {
  const arr2 = newArr;
  if (start < end) {
    const index = partition(arr2, start, end);
    quickSort(arr2, start, index - 1);
    quickSort(arr2, index, end);
  }
  return arr2;
}

function sortByAsc(arr) {
  return quickSort(arr);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let strStorage = str;
  let strPart1 = '';
  let strPart2 = '';
  let count = 0;
  let count2 = 0;

  let realIterations;

  function shuffle(strNew) {
    for (let i = 0; i < strNew.length; i += 1) {
      if (i % 2 === 0) {
        strPart1 += strNew[i];
      } else {
        strPart2 += strNew[i];
      }
    }
    count += 1;
    strStorage = strPart1 + strPart2;
    strPart1 = '';
    strPart2 = '';
    if (strStorage === str) {
      realIterations = count;
      count += 100;
      count2 += 1;
    }
    return count;
  }

  while (count < 100) {
    shuffle(strStorage);
  }
  if (count2 > 0) {
    if (iterations < realIterations) {
      while (count2 <= iterations) {
        shuffle(strStorage);
        count2 += 1;
      }
    } else {
      const repeat = Math.floor(iterations / realIterations);
      const repeat1 = repeat * realIterations;
      const repeat2 = iterations - repeat1;
      while (count2 <= repeat2) {
        shuffle(strStorage);
        count2 += 1;
      }
    }
  }
  return strStorage;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let newNumber = number;
  const num = [];
  while (newNumber > 0) {
    const digit = newNumber % 10;
    num.unshift(digit);
    newNumber = Math.floor(newNumber / 10);
  }

  let i = num.length - 1;
  while (i > 0 && num[i - 1] >= num[i]) {
    i -= 1;
  }
  if (i === 0) {
    return num;
  }
  let j = num.length - 1;
  while (num[j] <= num[i - 1]) {
    j -= 1;
  }
  [num[i - 1], num[j]] = [num[j], num[i - 1]];
  const newNum = num;
  const sorted = newNum.splice(i, newNum.length).sort();
  const splice = num.splice(0, i);
  const joinArr = [...splice, ...sorted];
  const result = parseInt(joinArr.join(''), 10);
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
