//01. 나머지가 1이 되는 수 찾기

function solution(n) {
  for (let x = 2; x < n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
  return n - 1; // n이 소수인 경우, n-1을 반환
}

console.log(solution(10));
