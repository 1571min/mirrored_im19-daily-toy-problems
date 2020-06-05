/*
숫자가 주어졌을때, threeFiveMultiples(num) 함수는 해당 숫자보다 작은 3 혹은 5의 배수들의 총합을 반환합니다.

예시: 만약 10이 주어졌다면, 10 보다 작은 3과 5의 배수들은 3, 5, 6, 9 가 있으며
      해당 숫자들을 모두 더하면 23 이 나오므로 여러분이 작성하진 함수는 23 을 반환해야 합니다. 
 */

function threeFiveMultiples(num) {
  // 여기에 코드를 작성하세요
  let result = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0) {
      result += i;
    } else if (i % 5 === 0) {
      result += i;
    }
  }
  return result;
}
