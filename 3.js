// 01. 점의 위치 구하기

function solution(dot) {
  const x = dot[0];
  const y = dot[1];

  if (x > 0 && y > 0) {
    return 1; // 제1사분면
  } else if (x < 0 && y > 0) {
    return 2; // 제2사분면
  } else if (x < 0 && y < 0) {
    return 3; // 제3사분면
  } else if (x > 0 && y < 0) {
    return 4; // 제4사분면
  }
}

// 02. 배열 뒤집기

function solution(num_list) {
  return num_list.reverse();
}

function solution(num_list) {
  let answer = [];
  let j = num_list.length;
  for (let i = 1; i <= j; i++) {
    answer.push(num_list[j - i]);
  }
  return answer;
}

// 03. 중복된 숫자 개수

function solution(array, n) {
  const filteredArray = array.filter((element) => element === n);

  return filteredArray.length;
}

function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      answer++;
    }
  }
  return answer;
}
