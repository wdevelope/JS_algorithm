// 01. 문자 반복 출력

function solution(my_string, n) {
  // 문자열의 각 문자를 n번 반복하여 배열로 만든 후, join()을 사용해 문자열로 결합
  const repeatedCharacters = my_string
    .split('')
    .map((char) => char.repeat(n))
    .join('');
  return repeatedCharacters;
}

// 02. 옷가게 할인 받기

function solution(price) {
  let discount = 0;

  if (price >= 500000) {
    discount = 0.2; // 50만 원 이상 구매 시 20% 할인
  } else if (price >= 300000) {
    discount = 0.1; // 30만 원 이상 구매 시 10% 할인
  } else if (price >= 100000) {
    discount = 0.05; // 10만 원 이상 구매 시 5% 할인
  }

  const discountedPrice = price - price * discount;

  // 소수점 이하를 버린 정수를 반환
  const finalPrice = Math.floor(discountedPrice);
  return finalPrice;
}
