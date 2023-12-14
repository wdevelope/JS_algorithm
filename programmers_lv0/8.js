//01. 피자 나눠 먹기 (2)

function solution(slice, n) {
  let pizza = 1;
  let pizzaTotal = pizza * slice;
  for (slice = 2; slice <= 10; slice++) {
    if (pizzaTotal % n >= 1) {
      return pizzaTotal;
    }
  }
}

//02. 피자 나눠 먹기 (3)

// me
function solution(slice, n) {
  // 소숫점 부분 버림처리
  let wholePizzas = (n / slice) | 0;

  if (n % slice === 0) {
    return wholePizzas;
  } else {
    return wholePizzas + 1;
  }
}

// other
function solution(slice, n) {
  return Math.ceil(n / slice);
}
