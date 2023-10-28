// 01. 짝수 홀수 개수

function solution(num_list) {
  let evenCount = 0;
  let oddCount = 0;

  for (const num of num_list) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return [evenCount, oddCount];
}

// 02. 머쓱이보다 키 큰 사람

function solution(array, height) {
  let count = 0; // 초기 키 큰 사람 수는 0명

  for (const friendHeight of array) {
    if (friendHeight > height) {
      count++; // 머쓱이보다 키 큰 경우 count 증가
    }
  }

  return count;
}
