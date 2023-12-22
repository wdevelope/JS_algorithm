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

//02. 진료순서 정하기

function solution(emergency) {
  // 원본 배열을 복사하여 정렬
  const sorted = [...emergency].sort((a, b) => b - a);

  // 원본 배열의 각 원소에 대해 정렬된 배열에서의 인덱스를 찾아 순위를 매김
  const ranks = emergency.map((e) => sorted.indexOf(e) + 1);

  return ranks;
}

function solution(emergency) {
  var answer = [];
  let a = [];

  for (let i = 0; i < emergency.length; i++) {
    a.push(emergency[i]);
  }
  a = a.sort((a, b) => b - a);

  for (let z = 0; z < emergency.length; z++) {
    const x = a.indexOf(emergency[z]);
    answer.push(x + 1);
  }

  return answer;
}

//03. 개미군단
function solution(hp) {
  let count = 0;

  // 장군개미의 수
  count += Math.floor(hp / 5);
  hp %= 5;

  // 병정개미의 수
  count += Math.floor(hp / 3);
  hp %= 3;

  // 일개미의 수 (남은 hp)
  count += hp;

  return count;
}
