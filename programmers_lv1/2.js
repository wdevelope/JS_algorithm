//01. 평균 구하기

function solution(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let arrange = sum / arr.length;
  return arrange;
}

console.log(solution([1, 2, 3]));

//02. 문자열을 정수로 바꾸기

// me
function solution(s) {
  let num = s * 1;
  console.log(typeof num);
  return num;
}

// other (내장함수)
function strToInt(str) {
  return parseInt(str, 10);
}

console.log(solution('-456'));
