// 01. 순서쌍의 개수

function solution(n) {
  let count = 0; // 자연수 순서쌍의 개수 초기화

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // n을 i로 나눈 몫과 i를 곱하면 n이 되는 순서쌍
      const pair1 = i;
      const pair2 = n / i;

      // pair1과 pair2가 서로 다르면 두 개의 순서쌍을 추가
      if (pair1 !== pair2) {
        count += 2;
      } else {
        // pair1과 pair2가 같으면 하나의 순서쌍만 추가
        count++;
      }
    }
  }

  return count;
}

// 02. 배열의 유사도

function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

// 03. 특정 문자열 제거

function solution(my_string, letter) {
  const result = my_string.split(letter).join('');
  return result;
}
