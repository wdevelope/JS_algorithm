// 01. 2차원으로 만들기

function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length; i += n) {
    let array = num_list.slice(i, i + n);
    result.push(array);
  }
  return result;
}

let num_list = [1, 2, 3, 4, 5, 6, 7, 8];
let dab = solution(num_list, 2);

console.log('2차원으로 만들기->', dab);

// 02. 공던지기

function solution(numbers, k) {
  // 현재 위치를 첫 번째 사람의 위치로 초기화
  let current_index = 0;

  // k번째 던지기까지 반복
  for (let i = 0; i < k - 1; i++) {
    // 첫 번째 던짐을 이미 고려하여 k-1번 반복
    // 오른쪽으로 두 칸 이동 (한 명 건너뛰기)
    current_index = (current_index + 2) % numbers.length;
  }

  // k번째로 공을 던지는 사람의 번호 반환
  return numbers[current_index];
}

let numbers = [1, 2, 3];
let dab2 = solution(numbers, 3);
