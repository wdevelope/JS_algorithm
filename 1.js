// 01. n 번째 원소부터

function solution(num_list, n) {
  return num_list.slice(n - 1);
}

// 02. 배열에서 문자열 대소문자 변환하기

function solution(strArr) {
  const result = strArr.map((str, index) => {
    if (index % 2 === 0) {
      return str.toLowerCase();
    } else {
      return str.toUpperCase();
    }
  });
  return result;
}

// 03. 카운트 다운

function solution(start_num, end_num) {
  const result = [];
  for (let i = start_num; i >= end_num; i--) {
    result.push(i);
  }
  return result;
}
