//01. 짝수와 홀수

function evenOrOdd(num) {
  return num % 2 ? 'Odd' : 'Even';
}

//02. 약수의 합

function solution(n) {
  let sum = 0;

  for (let x = 1; x <= n; x++) {
    if (n % x === 0) {
      sum += x;
    }
  }

  return sum;
}

// 계산량 줄이는 다른 좋은방법
function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer;
}
