//01. 외계행성의 나이

function solution(age) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  let answer = '';
  age = age.toString();

  for (let i = 0; i < age.length; i++) {
    answer += alphabet[age[i]];
  }
  return answer;
}

function solution(age) {
  return age
    .toString()
    .split('')
    .map((v) => 'abcdefghij'[v])
    .join('');
}
