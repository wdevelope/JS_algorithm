// 01. 배열의 평균값

function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return answer;
}

// 02. 편지

function solution(message) {
  const letterSize = 2;
  const messageLength = message.length;
  const paperWidth = messageLength * letterSize;

  return paperWidth;
}

// 03. 피자 나눠 먹기 (1)

function solution(n) {
  const pizzaSlices = 7;
  const pizzasNeeded = Math.ceil(n / pizzaSlices);

  return pizzasNeeded;
}

//
