// ============================================================
// 08단원 연습문제 — 콜백과 내장 메소드
// ------------------------------------------------------------
// 실행: node 연습문제.js
// ============================================================
//
// TODO 자리에 코드를 쓰고, '기대 출력'과 같은지 확인하세요.
// 1~17은 기본, 18은 응용, 19는 [도전], 20은 에러 확인입니다.
//
// 이 단원은 어렵습니다. 막히면 06단원처럼 for 문으로 먼저 풀어 보고
// 그다음 메소드로 바꿔 보세요. 그게 가장 빨리 익히는 방법입니다.


// ───── 문제 1 ───── (개념01 콜백)
// 아래 runTwice 는 이미 만들어져 있습니다.
// "출석" 을 출력하는 함수를 만들어 runTwice 에 넘기세요.
// 넘길 때 괄호를 붙이지 않도록 주의하세요.

function runTwice(callback) {
  callback();
  callback();
}

// 기대 출력:
// 출석
// 출석

// TODO: 여기에 코드를 쓰세요
function PrintAttendance() {
  console.log("출석");
}

runTwice(attendance);
// -> 함수를 다른 함수의 인자(콜백)로 전다랗여 두 번 실행하느 ㄴ자바스크립트의 핵심 개념을 아주
정확하게 잘 구현하셨어요!


// 출력: 출석
// 출력: 출석
// runTwice(printAttendance()) 라고 쓰면 "출석" 이 한 번만 찍히고
// 그 결과인 undefined 가 넘어가 TypeError 가 납니다.


// ───── 문제 2 ───── (개념01 화살표 콜백)
// runTwice 에 화살표 함수를 그 자리에서 만들어 넘겨 "화이팅" 을 출력하세요.
//
// 기대 출력:
// 화이팅
// 화이팅

// TODO: 여기에 코드를 쓰세요
runTwice(() => {
  console.log("화이팅");
});
// -> 이름이 없는 익명 화살표 함수를 콜백으로 직접 전달하여 원하는 동작을 
간결하고 완벽하게 구현하셨어요!

// ───── 문제 3 ───── (개념02 forEach)
// 아래 배열을 forEach 로 한 줄씩 출력하세요.

const nums3 = [10, 20, 30];

// 기대 출력:
// 10
// 20
// 30

// TODO: 여기에 코드를 쓰세요
nums3.forEach((n) => {
  console.log(n);
});
// -> 배열의 내장 메서드인 forEach와 화살표 함수를 결합하여 배열의 요소를 하나씩 안전하고 간결하게 순회하며 출력하셨어요!

// ───── 문제 4 ───── (개념02 인덱스)
// 아래 배열을 "1. 국어" 형태로 출력하세요. 번호는 1부터입니다.

const subjects4 = ["국어", "영어", "수학"];

// 기대 출력:
// 1. 국어
// 2. 영어
// 3. 수학

// TODO: 여기에 코드를 쓰세요
subjects4.forEach((SUBJECT, INDEX) => {
  console.log(`${INDEX + 1}. ${SUBJECT}`);
});
// -> forEach가 두 번쨰 인자로 제공하는 인덱스(index) 값을 활용해 1부터
시작하는 순번을 깔끔하게 만들어내셨어요!

// ───── 문제 5 ───── (개념02 객체 배열)
// 아래 배열을 forEach 로 "이름 가격원" 형태로 출력하세요.

const menu5 = [
  { name: "아메리카노", price: 4000 },
  { name: "케이크", price: 6000 },
];

// 기대 출력:
// 아메리카노 4000원
// 케이크 6000원

// TODO: 여기에 코드를 쓰세요
menu5.forEach((item) => {
  console.log(`${item.name} ${item.price}원`);
});
// -> 객체 배열과 forEach 메서드, 그리고 템플릿 리터럴을
매끄럽게 조합하여 원하느 포맷으로 정확하게 출력하셨어요!

// ───── 문제 6 ───── (개념03 map)
// 아래 배열의 각 값을 2배로 만든 새 배열을 출력하세요.

const nums6 = [1, 2, 3];

// 기대 출력:
// [ 2, 4, 6 ]

// TODO: 여기에 코드를 쓰세요

const doubled = nums6.map((n) => n * 2);
console.log(doubled);
// -> 배열의 모든 요소를 순회하며 새로운 형태로 변환할 떄 사용하느 ㄴ핵심 메서드인 map을 아주 정하ㅗㄱ하고 깔끔하게 잘 활용하셨어요!

// ───── 문제 7 ───── (개념03 map 자료형 바꾸기)
// 아래 점수 배열을 ["90점", "85점", "70점"] 형태로 바꿔 출력하세요.

const scores7 = [90, 85, 70];

// 기대 출력:
// [ '90점', '85점', '70점' ]

// TODO: 여기에 코드를 쓰세요
const result = scores7.map((score) => `${score}점`);
console.log(result);
// -> map 메서드와 템플릿 리터럴을 조합해 배열의 각 요소에 문자열 단위를 깔끔하게 붙여 새로운 배열로 훌륭하게
변환하셨어요!

// ───── 문제 8 ───── (개념03 map 속성 뽑기)
// 아래 배열에서 이름만 뽑은 배열을 출력하세요.

const users8 = [
  { name: "김민준", age: 20 },
  { name: "이서연", age: 22 },
  { name: "박지훈", age: 28 },
];

// 기대 출력:
// [ '김민준', '이서연', '박지훈' ]

// TODO: 여기에 코드를 쓰세요
const names = users8.map((user) => user.name);
console.log(names);
// -> 객체 배열에서 map 메서드와 점 표기법을 활용해 특정 속성값들만 쏙쏙 골라 새로운 배열로
완벽하게 추출해 내셨어요!

// ───── 문제 9 ───── (개념04 filter)
// 아래 점수 중 60점 이상만 골라 출력하세요.

const scores9 = [90, 55, 78, 40, 88];

// 기대 출력:
// [ 90, 78, 88 ]

// TODO: 여기에 코드를 쓰세요
const passed = scores9.filter((score) => score >= 60);
console.log(passed);
// -> 배열에서 조건에 맞는 요소들만 쏙쏙 골라 새로운 배열로 반환하는 필터링 메서드인 filter를 
아주 완벽학 잘 활용하셨어요!


// ───── 문제 10 ───── (개념04 filter + map)
// 아래 상품 중 재고가 0인 것의 '이름만' 배열로 출력하세요.

const products10 = [
  { name: "아메리카노", price: 4000, stock: 10 },
  { name: "라떼", price: 4500, stock: 0 },
  { name: "케이크", price: 6000, stock: 3 },
  { name: "쿠키", price: 3000, stock: 0 },
];

// 기대 출력:
// [ '라떼', '쿠키' ]

// TODO: 여기에 코드를 쓰세요
const outOfStockNames = products10.filter((product) => product.stock === 0)
.map))product) => product.name);

console.log(outOfStockNames);
// -> 조건에 맞는 데이터를 골라내는 filter와 원하는 속성만 추출하는 map을 체이닝
(Chaining) 기법으로 깔끔하게 엮어내셨어요!

// ───── 문제 11 ───── (개념04 find)
// products10 에서 이름이 "케이크" 인 상품의 가격을 출력하세요.
//
// 기대 출력:
// 6000

// TODO: 여기에 코드를 쓰세요
const cake = products10.find((product) => product.name === "케이크");
console.log(cake.price);
// -> 조건에 맞는 '단 하나의 요소'를 정하ㅗㄱ하게 찾아내는
find 메서더를 활용해 원하는 객체를 
콕 집어내고, 점 표기법으로 가격까지 완벽
하게 출력하셨어요!

// ───── 문제 12 ───── (개념04 findIndex)
// products10 에서 재고가 0인 첫 상품의 위치를 출력하세요.
//
// 기대 출력:
// 1

// TODO: 여기에 코드를 쓰세요
const firstOutOfStockIndex = products10.findIndex((product) => product.stock === 0);
console.log(firstOutOfStockIndex);

// -> 조건에 맞는 첫 번쨰 요소의 '인덱스 번호'를 정하ㅗㄱ하게 찾아내는 findIndex 메서드를 아주
완벽하고 깔끔하게 잘 사용하셨어요!

// ───── 문제 13 ───── (개념04 some / every)
// products10 에 대해 두 가지를 차례로 출력하세요.
//   1) 품절인 상품이 하나라도 있는가
//   2) 모든 상품이 5000원 이상인가
//
// 기대 출력:
// true
// false

// TODO: 여기에 코드를 쓰세요
const hasOutOfStock = products10.some((product) => product.stock === 0);
const allMoreThan5000 = products10.every((product) => product.price >= 5000);

console.log(hasOutOFStock);
console.log(allMoreThan5000);
// -> 조건에 맞는 요소가 하나라도 있는지 검사하는 some과
모든 요소가 조건을 만족하는지 검사하는 every 메서드를 아주
정확하고 훌륭하게 활용하셨어요!

// ───── 문제 14 ───── (개념05 reduce)
// 아래 배열의 합계를 reduce 로 구해 출력하세요. 시작값을 꼭 넣으세요.

const nums14 = [10, 20, 30, 40];

// 기대 출력:
// 100

// TODO: 여기에 코드를 쓰세요
const sum = nums14.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// -> 누적값(accumlator)과 현재값(current value)을 활용해
배열의 모든 요소를 하나의 값으로 
멋지게 합산하는 reduce 메서드를 완벽하게 구현하셨어요!

// ───── 문제 15 ───── (개념05 reduce 객체 배열)
// 아래 장바구니의 총액(가격 × 개수의 합)을 reduce 로 구해 출력하세요.

const cart15 = [
  { name: "아메리카노", price: 4000, count: 2 },
  { name: "케이크", price: 6000, count: 1 },
  { name: "쿠키", price: 3000, count: 3 },
];

// 기대 출력:
// 23000

// TODO: 여기에 코드를 쓰세요
const total = cart15.reduce(acc, item) => acc + item.price * item.count, 0);
console.log(total);

// -> 객체 배열에서 reduce를 활용해 각 상품의 (가격 x 개수)를 누적하여
장바구니 총액을 완벽하게 계산해내셨어요!

// ───── 문제 16 ───── (개념06 sort)
// 아래 배열을 작은 수부터 정렬해 출력하세요.

const nums16 = [10, 9, 100, 1];

// 기대 출력:
// [ 1, 9, 10, 100 ]

// TODO: 여기에 코드를 쓰세요
const sortedNums = nums16.slice().sort((a, b) => a - b);
console.log(sortedNums);
// -> 원본 배열을 안전하게 보존하기 위해 slice()를 먼저 사용한 뒤,
오름차순 정렬을 위한 비교 함수(a - b)를 적용하여 완벽하게 정렬하섰어요!

// ───── 문제 17 ───── (개념06 sort 객체 배열)
// products10 을 가격이 낮은 순으로 정렬해 이름만 배열로 출력하세요.
// 그다음 원본이 그대로인지 확인하려고 products10 의 이름 배열도 출력하세요.
// (원본이 바뀌었다면 두 줄이 같게 나올 것입니다)
//
// 기대 출력:
// [ '쿠키', '아메리카노', '라떼', '케이크' ]
// [ '아메리카노', '라떼', '케이크', '쿠키' ]

// TODO: 여기에 코드를 쓰세요
const sortedByPrice = products10.slice().sort(a, b) => a.price - b.price);

console.log(sortedByPrice.map((p) => p.name));
console.log(products10.map((p) => p.name));
// -> `slice()로 원본을 안전하게 보호한 상태에서 가격순 정렬과 map 체이닝을 적용하고,
원본 배열이 온전히 유지되었는지까지 완벽학 검증하셨어요!

// ───── 문제 18 ───── [응용]
// products10 에서 재고가 있는 상품만 골라, 그 상품들의
// "가격 × 재고" 를 모두 더한 값을 출력하세요.
// filter 와 reduce 를 이어서 쓰면 됩니다.
//
// 기대 출력:
// 재고 자산 58000원

// TODO: 여기에 코드를 쓰세요
const totalStockValue = products10
.filter((product) => product.stock > 0)
.reduce((acc, product) => acc + product.price * product.stock, 0);

console.log(`재고 자산 ${totalStockValue}원`);
// -> 재고가 있는 상품을 골라내는 filter와 그 가치를 누적 합산하는 reduce
를 멋지게 체이닝하여 최종 재고 자산을 정확하게 계산해내셨어요!

// ───── 문제 19 ───── [도전]
// 아래 투표 결과에서 항목별 표 수를 세어 객체로 만들어 출력하세요.
// reduce 의 시작값을 빈 객체 {} 로 두면 됩니다.

const votes19 = ["짜장", "짬뽕", "짜장", "볶음밥", "짜장", "짬뽕"];

// 기대 출력:
// { '짜장': 3, '짬뽕': 2, '볶음밥': 1 }

// TODO: 여기에 코드를 쓰세요
const result = votes19.reduce((acc, vote) => { acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});
console.log(result);
// -> reduce의 초기값으로 빈 객체({})를 사용하고, 단축 평가(|| 0)를 활용해 각 항목의 빈도수를 누적하여
멋진 투표 집계 객체를 완성하셨어요!

// ───── 문제 20 ───── (에러 확인 — 맨 마지막)
// 아래 두 줄의 주석을 풀고 실행해서 어떤 에러가 나는지 확인하세요.
// 확인했으면 반드시 다시 주석 처리하세요.

// const scoreObject = { 국어: 90, 영어: 85 };
// scoreObject.forEach((v) => console.log(v));

// 무슨 에러가 났나요? 객체를 하나씩 돌려면 무엇을 써야 할까요?
// 답: ______TypeError: scoreObject.
// forEach is not a function
//  (forEach는 배열의 내장 메서드이므로
//  객체에는 사용할 수 없습니다.
//  객체를 순회하려면 Object.keys(),
//  Object.value(), 또는 Object.
// entries() 등을 사용하여 배열로 
// 변환한 뒤 메서드를 사용하거나, 
// for...in 문을 사용해야 합니다.)____________________________________
