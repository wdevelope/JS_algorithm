// 01. 배열 자르기

function solution(numbers, num1, num2) {
  if (num1 < 0) {
    num1 = 0;
  }

  if (num2 > numbers.length - 1) {
    num2 = numbers.length - 1;
  }

  if (num1 > num2) {
    return [];
  }

  return numbers.slice(num1, num2 + 1);
}

// 02. 문자열 뒤집기

function solution(my_string) {
  let reversedString = '';
  for (let i = my_string.length - 1; i >= 0; i--) {
    reversedString += my_string[i];
  }
  return reversedString;
}

// 03. 문자열안에 문자열

function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}
