// arr = [5,-3,2,11,99,12,-12,-2,3,,-2,-4,4]
// 1. find all positive numbers in the array that have their opposites in it as well
// 2. Find all the even nos without using "%"
// You cannot use any inbuilt/math functions
// + - / *

function findPositive(arr) {
  let arrofPN = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let hasOpposite = false;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === -arr[j]) {
          hasOpposite = true;
          break;
        }
      }
      if (hasOpposite && !arrofPN.includes(arr[i])) {
        arrofPN.push(arr[i]);
      }
    }
  }
  return arrofPN;
}

let arr = [5, -3, 2, 11, 99, 12, -12, -2, 3, , -2, -4, 4];

console.log(findPositive(arr));

function getEvens(arr) {
  let arrofEN = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      let isEven = true;
      const numberstr = `${arr[i] / 2}`;
      for (let j = 0; j < numberstr.length; j++) {
        if (numberstr[numberstr.length - 1] == "5") {
          isEven = false;
          break;
        }
      }
      if (isEven) {
        arrofEN.push(arr[i]);
      }
    }
  }

  return arrofEN;
}

console.log(getEvens(arr));
