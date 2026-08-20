// ============================================================
// 05단원 연습문제 — 함수
// ------------------------------------------------------------
// 실행: node 연습문제.js
// ============================================================
//
// TODO 자리에 코드를 쓰고, '기대 출력'과 같은지 확인하세요.
// 1~15는 기본, 16은 응용, 17은 [도전], 18은 에러 확인입니다.


// ───── 문제 1 ───── (개념01)
// "환영합니다!" 를 출력하는 printWelcome 함수를 만들고 한 번 호출하세요.
//
// 기대 출력:
// 환영합니다!

// TODO: 여기에 코드를 쓰세요
function printWelcome() {
  console.log("환영합니다!");
}

printWelcome();
// -. 함수 선언식(`function')을 이용해
원하는 기능을 담은 함수를 만들고, 이를
정확하게 호출하여 "환영합니다!"를 
출력하는 코드를 완벽하게
작성하셨어요!

// ───── 문제 2 ───── (개념01)
// 아래 두 함수를 만들고, 세 번째 함수 printHeader 에서 순서대로 불러
// 아래 결과가 나오게 하세요.
//   printStar  : "*****" 출력
//   printTitle : "MENU" 출력
//   printHeader: printStar → printTitle → printStar 순서로 호출
//
// 기대 출력:
// *****
// MENU
// *****

// TODO: 여기에 코드를 쓰세요
function printStar() {
  console.log("*****");
}

function printTitle() {
  console.log("MENU");
}

function printHeader() {
  printStar();
  printTitle();
  printStar();
}

printHeader();
// -. 각각의 역할을 하는 함수들을 정읳하고,
다른 함수 내부에서 함수를 순서대로
호출하는 조합(Composition)패턴을 완벽하게
구현하셨어요!

// ───── 문제 3 ───── (개념02 매개변수)
// 이름을 받아 인사하는 callName 함수를 만들고 "이서연" 으로 호출하세요.
//
// 기대 출력:
// 이서연님, 안녕하세요

// TODO: 여기에 코드를 쓰세요
function callName(name) {
  console.log('${name}님, 안녕하세요');
}

callName("이서연");
// -> 매개변수를 전달받아 템플릿 리터럴과 조합해
원하는 문구로 출력하는 함수를완벽하게 작성하셨어요!

// ───── 문제 4 ───── (개념02 매개변수 2개)
// 가로와 세로를 받아 넓이를 출력하는 printArea 함수를 만들고 8, 5 로 호출하세요.
//
// 기대 출력:
// 40

// TODO: 여기에 코드를 쓰세요
function printArea(width, height) {
  console.log(width * height);
}

printArea(8, 5);
// -> 두 개의 매개변ㅅ(가로, 세로)를 전달받아
곱셈 연산을 수행하고 그 결과를 정확하게 출력하는
함수를 완벽하게 작성하셨어요!

// ───── 문제 5 ───── (개념02 기본값)
// 메뉴와 개수를 받는 order 함수를 만드세요. 개수의 기본값은 1입니다.
// order("라떼") 와 order("케이크", 3) 을 각각 호출하세요.
//
// 기대 출력:
// 라떼 1개
// 케이크 3개

// TODO: 여기에 코드를 쓰세요
function order(menu, count = 1_ {
  console.log('${menu} ${count}개');
}

order("라뗴");
order("케이크", 3);
// -> 함수의 매개변수에 기본값(Default Parameter)을 설정하는 문법을 활용하고, 백틱과 템플릿
리터럴 오타를 바로잡아 기대 출력값과 정확히 일치하도록 완벽하게 완성하셨어요!

// ───── 문제 6 ───── (개념03 return)
// 두 수를 더해서 '돌려주는' getSum 함수를 만드세요.
// console.log 를 함수 안에 쓰면 안 됩니다. return 을 쓰세요.
//
// 기대 출력:
// 10

// TODO: 여기에 코드를 쓰세요 (getSum(3, 7) 을 출력)
function getSum(a, b) {
  return a + b;
}

console.log(getSum(3, 7));
// -> 함수 내부에서 값을 직접 출력하는 대신 return 키워드를 사용해 결과를 바깥으로 반환하고,
외부에서 console.log로 감싸 호출하는 구조를 완벽하게 구현하셨어요!

// ───── 문제 7 ───── (개념03 return 재사용)
// 가격과 개수를 받아 총액을 돌려주는 getTotal 함수를 만들고,
// 결과를 변수에 담아 아래처럼 출력하세요. (4500원 4개)
//
// 기대 출력:
// 합계 18000원

// TODO: 여기에 코드를 쓰세요
function getTotal(price, count) {
  return price * count;
}

let total = getTotal(4500, 4);
console.log('합계 ${total}원');
// -> 데이터를 받아 계산한 뒤 반환(return)하는 함수를 정의하고,
반환된 값을 변수에 담아 템플릿 리터럴(오타 수정)과 함꼐 깔끔하게 
출력하는 코드를 완벽하게 완성하셨어요!

// ───── 문제 8 ───── (개념03 조기 반환)
// 나누기 함수 divide 를 만드세요.
// 나누는 수가 0이면 "0으로 나눌 수 없습니다" 를 돌려주고 즉시 끝냅니다.
// divide(10, 0) 과 divide(10, 2) 를 각각 출력하세요.
//
// 기대 출력:
// 0으로 나눌 수 없습니다
// 5

// TODO: 여기에 코드를 쓰세요
function divide(a, b) {
  if (b === 0) {
    return "0으로 나눌 수 없습니다";
  }
  return a / b;
}

console.log(divide(10, 0));
console.log(divide(10, 2));
// -> 조건문과 return 키워드를 활용해 예외 상황
(으로 나누는 경우)을 미리 방어하고,
정상적인 상황에서는 연산 결과를 정확하게 반환하는 함수를 완벽하게 작성하셨어요!

// ───── 문제 9 ───── (개념03 판단 함수)
// 점수가 60 이상인지 true/false 로 돌려주는 isPass 함수를 만드세요.
// if 를 쓰지 말고 비교식을 그대로 return 하세요.
// isPass(45) 와 isPass(80) 을 각각 출력하세요.
//
// 기대 출력:
// false
// true

// TODO: 여기에 코드를 쓰세요
function isPASS(score) {
  return score >= 60;
}

console.log(isPass(45));
console.log(isPass(80);
// -> 불필요한 if 문 없이 비교 연산식을 그대로 return 하여 참/거짓 값을 깔끔하게 반환하는 함
함수를 완벽하게 작성하셨어요!

// ───── 문제 10 ───── (개념04 함수 표현식)
// 두 수를 빼는 함수를 '함수 표현식'으로 만들어 minus 변수에 담고,
// minus(10, 3) 을 출력하세요.
//
// 기대 출력:
// 7

// TODO: 여기에 코드를 쓰세요
const minus = function (a, b) {
  return a - b;
};

console.log(minus(10, 3));
// -> 함수 표현식(Function Expression) 문법을 활용해 익명 함수를 변수 'nunus'에 안전하게 담고,
이를 정확하게 호출하여 결과값을 출력하는 코드를 완벽하게 완성하셨어요!

// ───── 문제 11 ───── (개념04 함수를 인자로)
// 아래 calculate 함수는 이미 만들어져 있습니다.
// 곱하기 함수를 만들어 calculate 에 넘겨 6 × 7 을 구하세요.
// 넘길 때 괄호를 붙이지 않도록 주의하세요.

function calculate(a, b, operation) {
  return operation(a, b);
}

// 기대 출력:
// 42

// TODO: 여기에 코드를 쓰세요
const multiply = function (a, b) {
  return a * b;
};

console.log(calculate(6, 7, multiply));
// -> 함수를 다른 함수의 인자(콜백 함수)로 전달하는 고차 함수(Higher-Order Function) 개념을
활용해 곱셈 연산을 완벽하게 수행하셨어요!

// ───── 문제 12 ───── (개념05 화살표 변환)
// 아래 함수를 화살표 함수로 바꿔서 arrowDouble 이라는 이름으로 만들고
// arrowDouble(7) 을 출력하세요.
//
//   function double(n) {
//     return n * 2;
//   }
//
// 기대 출력:
// 14

// TODO: 여기에 코드를 쓰세요
const arrowDouble = (n) => n * 2;

console.log(arrowDouble(7));
// es6 화살표 함수(Arrow Function) 문법과 암묵적 반환(Implicit Return) 방식을 활용해
코드를 가장 간결하고 세련되게 완벽하게 작성하셨어요!

// ───── 문제 13 ───── (개념05 줄여쓰기)
// 숫자를 제곱해서 돌려주는 화살표 함수를 '중괄호와 return 없이' 한 줄로 쓰세요.
// square(9) 를 출력하세요.
//
// 기대 출력:
// 81

// TODO: 여기에 코드를 쓰세요
const square = n => n * n;

console.log(square(9));

// ───── 문제 14 ───── (개념05 여러 줄)
// 가격과 할인율을 받아 할인된 가격을 돌려주는 화살표 함수를 만드세요.
// 몸통이 여러 줄이므로 중괄호와 return 을 씁니다.
// getDiscounted(10000, 0.3) 을 출력하세요.
//
// 기대 출력:
// 7000

// TODO: 여기에 코드를 쓰세요
const getDiscounted = (price, rate) => {
  let discount = price * rate;
  return price - discount;
};

console.log(getDiscounted(10000, 0.3));
// -> 매개변수가 하나일 떄 괄호를 생략하는 간결한 화살표 함수 형태부터, 복잡한 로직을 처리하기
위해 중괄호와 return 키워드를 사용하는 여러 줄 화살표 함수까지 완벽하게 소화하셨어요!

// ───── 문제 15 ───── (개념06 스코프)
// 함수 밖에 taxRate 를 0.1 로 만들고,
// 가격을 받아 세금을 출력하는 printTax 함수를 만들어 10000 으로 호출하세요.
// taxRate 는 함수 안에서 그대로 쓸 수 있습니다.
//
// 기대 출력:
// 1000

// TODO: 여기에 코드를 쓰세요
const taxRate = 0.1;

function printTax(price) {
  console.log(price * taxRate);
}

printTax(10000);
// -> 함수 바깥에 선언된 전역 변수(taxRate)를
함수 내부에서 자유롭게 참조하여 연산하는 스코프
(Scope) 개념을 완벽하게 구현하셨어요!

// ───── 문제 16 ───── [응용]
// 편의점 계산기입니다. 함수 두 개를 만드세요.
//   getRawTotal(price, count)        : 가격 × 개수를 돌려준다
//   applyDiscount(total, isMember)   : 회원이면 10% 할인한 값, 아니면 그대로
//                                      (소수가 나오면 Math.round 로 다듬을 것)
// 1200원짜리를 5개, 회원인 경우로 계산해 아래처럼 출력하세요.
//
// 기대 출력:
// 합계 5400원

// TODO: 여기에 코드를 쓰세요
function getRawTotal(price, count) {
  reutun price * count;
}

function aplyDiscount(total, isMember) {
  if (isMember) {
    return Math.round(total * 0.9);
  }
  return total;
}

let raw = getRawTotal(1200, 5);
let finalTotal = applyDISCOUNT(raw, true);

console.log('합계 ${fnalTotal}원');

// -> 데이터를 계산하는 함수와 조건을 판별해 가공하는 함수를 각각 나누어 만들고,
오타(return, 함수명, 백틱 등)를 말끔히 정리하여 완벽한 편의점 계싼기 로직을 완셩하셨어요!)

// ───── 문제 17 ───── [도전]
// 시작 수부터 끝 수까지 모두 더한 값을 돌려주는 getSumRange 함수를 만드세요.
// getSumRange(1, 10) 과 getSumRange(5, 10) 을 각각 출력하세요.
//
// 힌트: 반복문으로 시작 수부터 끝 수까지 더해 나가고, 그 값을 return 하세요.
//       더한 값을 담을 변수는 반복문 밖에 만들어야 합니다.
//       console.log 로 찍지 말고 return 으로 돌려주어야 두 번 호출해 쓸 수 있습니다.
//
// 기대 출력:
// 55
// 45

// TODO: 여기에 코드를 쓰세요
function getSumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSumrange(1, 10));
console.log(getSumRange(5, 10));
// -> 반복문과 누적 합계 변수를 활용해 특정 범위의 숫자를 모두 더하는 알고리즘 함수를 완벽하게 구현하셧어요.

// ───── 문제 18 ───── (에러 확인 — 맨 마지막)
// 아래 주석을 풀고 실행해서 어떤 에러가 나는지 확인하세요.
// 확인했으면 반드시 다시 주석 처리하세요.

// function makeSecret() {
//   const secret = "비밀번호";
// }
// makeSecret();
// console.log(secret);

// 무슨 에러가 났나요? secret 을 함수 밖에서 쓰려면 어떻게 고쳐야 할까요?
// 답: ___ReferenceError가 발생합니다.
//  secret을 함수 밖엣 쓰려면 함수
//  안에서 return secret으로 값을 
// 반환한 뒤, 반환된 값을 변수에 담아 
// 출력해야 합니다._______________________________________
