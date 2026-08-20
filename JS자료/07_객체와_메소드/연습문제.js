// ============================================================
// 07단원 연습문제 — 객체와 메소드
// ------------------------------------------------------------
// 실행: node 연습문제.js
// ============================================================
//
// TODO 자리에 코드를 쓰고, '기대 출력'과 같은지 확인하세요.
// 1~17은 기본, 18은 응용, 19는 [도전], 20은 에러 확인입니다.
//
// 객체를 console.log 로 찍으면 { name: '값', age: 20 } 모양으로 나옵니다.


// ───── 문제 1 ───── (개념01)
// name 이 "이서연", age 가 22 인 객체 user1 을 만들어 출력하세요. -> const user 1 = {
// 출력: { name: "이서연", }
//
// 기대 출력: 


// TODO: 여기에 코드를 쓰세요

const user1 = {
  name: "이서연",
  age: 22,
};
// -> 자바스크립트의 핵심 데이터 구조 중 하나인
객체(Object)를 키와 값의 쌍으로 정확하게 생성
하고 출력하셨어요!

// ───── 문제 2 ───── (개념01 점 표기법)
// 아래 객체에서 price 를 꺼내 출력하세요.

const book2 = { title: "자바스크립트 입문", price: 25000, author: "김작가" };

// (기대) 출력:
// 25000

// TODO: 여기에 코드를 쓰세요

console.log(book2.price);
// -> 점 표기법(Dot notation)을 사용하여 객체 안의 특정 프로퍼티(price)
에 정확하게 접근하고 값을 깔끔하게 출력
하셨어요!

// ───── 문제 3 ───── (개념01 대괄호 표기법)
// 아래 변수에 담긴 이름을 이용해 book2 에서 값을 꺼내 출력하세요.
// 점 표기법으로는 안 됩니다.

const key3 = "author";

// 기대 출력:
// 김작가

// TODO: 여기에 코드를 쓰세요

console.log(book2[ley3]);

// 출력: 김작가
// book2.key3 이라고 쓰면 "key3" 라는 이름의 속성을 찾아 undefined 가 됩니다.
// 이름이 변수에 들어 있을 때는 대괄호 표기법을 씁니다.
// -> 변수에 담긴 문자열을 활용해 객처의 속성에 접근할
수 있는 대괄호 표기법(Bracket notation)을 아주 정확하게
잘 활용하셨어요!

// ───── 문제 4 ───── (개념01 중첩 객체)
// 아래 객체에서 판매자 이름을 꺼내 출력하세요.

const product4 = {
  name: "무선 이어폰",
  seller: { name: "봄날전자", rating: 4.8 },
};

// 기대 출력:
// 봄날전자

// TODO: 여기에 코드를 쓰세요

console.log(product4.seller.name);
// -> 중첩된 객체 구조에서 점 표기법을 연달아 사용하여 내부
객체의 속성(seller 안의 name)에 정확하게 
접근하고 출력하셨어요!

// 출력: 봄날전자
// 객체 안의 객체는 점을 이어 붙입니다.

// ───── 문제 5 ───── (개념01 옵셔널 체이닝)
// 아래 빈 객체에서 seller.name 을 에러 없이 꺼내려 합니다.
// 값이 없으면 "판매자 미정" 이 나오도록 한 줄로 출력하세요.
// 힌트: ?. 와 ??

const empty5 = {};

// 기대 출력:
// 판매자 미정

// TODO: 여기에 코드를 쓰세요

console.log(empty5.seller?.name ?? "판매자 미정");
// -> 옵셔널 체이닝(?>)과 널 병합 연산자(??)
를 완벽하게 조합하여, 값이 존재하지
않는 안전하지 않은 상황에서도 에러 없이 기본
값을 훌륭하게 출력해내셨어요!

// 출력: 판매자 미정
// ?. 은 앞이 없으면 거기서 멈추고 undefined 를 냅니다. 에러가 나지 않습니다.
// ?? 는 왼쪽이 null 이나 undefined 일 때만 오른쪽 값을 씁니다.


// ───── 문제 6 ───── (개념02 추가)
// 빈 객체 car6 을 만들고 brand 에 "현대", year 에 2024 를 넣어 출력하세요.
//
// 기대 출력:
// { brand: '현대', year: 2024 }

// TODO: 여기에 코드를 쓰세요

const car6 = {};
car6.brand = "현대";
car6.year = 2024;

console.log(car6);
// 없는 이름에 값을 넣으면 새 속성이 생깁니다.
// -> 빈 객체를 선언한 뒤 점 표기법을 활용해
새로운 속성(brand, year)을 자유롭게 추가
하고 완성된 객체를 훌륭하게 출력하셨어요!

// ───── 문제 7 ───── (개념02 수정)
// 아래 객체의 stock 을 0 으로 바꾸고 출력하세요.

const item7 = { name: "케이크", stock: 3 };

// 기대 출력:
// { name: '케이크', stock: 0 }

// TODO: 여기에 코드를 쓰세요

item7.stock - 0

console.log(item7):

// 추가와 수정의 문법이 같습니다. 이름을 오타 내면 새 속성이 생기니 주의하세요.
// -> 기존 객체의 속성에 새로운 값을 할당(수정)하는 
방법과 출력 방식을 정확하게 적용하셨어요!

// ───── 문제 8 ───── (개념02 삭제)
// 아래 객체에서 oldPrice 속성을 지우고 출력하세요.

const sale8 = { name: "이어폰", price: 89000, oldPrice: 120000 };

// 기대 출력:
// { name: '이어폰', price: 89000 }

// TODO: 여기에 코드를 쓰세요

delete sale8.oldPrice;

console.log(sale8);

// 배열에는 delete 를 쓰면 안 되지만 객체에는 써도 됩니다.
// -> delete 연산자를 사용하여 객체 내부의
불필요한 속성(oldPrice)을 정확하게
삭제하고 깔끔하게 출력하셨어요!

// ───── 문제 9 ───── (개념02 in)
// 아래 객체에 "theme" 속성이 있는지, "language" 속성이 있는지 차례로 출력하세요.

const config9 = { theme: "dark", fontSize: 14 };

// 기대 출력:
// true
// false

// TODO: 여기에 코드를 쓰세요

console.log("theme" in config9);
console.log("language" in config9);
// in 의 왼쪽은 반드시 따옴표로 감싼 문자열입니다.
// -> in 연산자를 사용하여 객체 안에 특정 속성이 존재하는지
여부를 불리언(true/false) 값으로 정확하게
판별해 출력하셨어요! 

// ───── 문제 10 ───── (개념02 복사)
// 아래 객체를 '진짜로' 복사해서 copy10 을 만들고,
// copy10 의 age 만 99 로 바꾼 뒤 두 객체를 차례로 출력하세요.
// 원본은 그대로여야 합니다.

const origin10 = { name: "박지훈", age: 30 };

// 힌트: copy10 = origin10 은 복사가 아닙니다. 이름표만 하나 더 붙인 것이라
//       copy10 을 바꾸면 origin10 도 같이 바뀝니다. (개념02 섹션 6)
//       내용을 진짜로 복사하려면 개념02 섹션 6에 나온 { ...객체 } 를 쓰세요.
//
// 기대 출력:
// { name: '박지훈', age: 99 }
// { name: '박지훈', age: 30 }

// TODO: 여기에 코드를 쓰세요

const copy10 = { ...origin10};
copy10.age = 99;

console.log(copy10);
console.log(origin10);

const origin10 = { name: "박지훈", age: 30 };
// -> 스프레드 연산자(...)를 활용해 객체의 속성을 새
객체에 얕은 복사(Spread)하여, 원본을
훼손하지 않고 독립적인 복사본을 완벽하게 만들어내셨어요! 



// ───── 문제 11 ───── (개념03 메소드)
// name 속성과, "안녕하세요, OOO입니다" 를 출력하는 introduce 메소드를 가진
// 객체 person11 을 만들고 메소드를 호출하세요.
// 메소드 안에서는 this 를 쓰세요. 화살표 함수로 만들면 안 됩니다.
//
// 기대 출력:
// 안녕하세요, 최유진입니다

// TODO: 여기에 코드를 쓰세요

const person11 = {
  name: "최유진",
  introudce() {
    console.log(`안녕하세요. ${this.name}입니다`);
  }.
};

person11.introudce();
// 화살표 함수로 만들면 this 가 person11 을 가리키지 않아 undefined 가 나옵니다.
// -> 객체 내붕 메서드를 정의하고 this 키워드를 활용해 자신의 속성(name)
에 정확하게 접근하여 멋지게 출력해내셨어요!

// ───── 문제 12 ───── (개념03 this 로 값 바꾸기)
// count 가 0 이고, increase 메소드로 1씩 늘리는 객체 counter12 를 만드세요.
// increase 를 세 번 부른 뒤 count 를 출력하세요.
//
// 기대 출력:
// 3

// TODO: 여기에 코드를 쓰세요

const counter12 = {
  count: 0,
  increase() {
    this.count =+ 1;
  },
  };

counter12.increase();
counter12.increase();
counter12.increase();

console.log(counter12.count);
// 메서드 내부에서 this를 사용해 객체 자신의 속성값을 직접 수정하는 카운터 로직을 아주 훌륭하
게 구현하쎳어요!

// ───── 문제 13 ───── (개념04 for...in)
// 아래 객체를 for...in 으로 돌면서 "이름: 값" 형태로 출력하세요.

const user13 = { name: "정하늘", age: 28, city: "대구" };

// 기대 출력:
// name: 정하늘
// age: 28
// city: 대구

// TODO: 여기에 코드를 쓰세요

for (const key in user13) {
  console.log(`${key}: ${user13[key]}`);
}


const user13 = { name: "정하늘", age: 28, city: "대구" };

for (const key in user13) {
  console.log(`${key}: ${user13[key]}`);
}
// for...in 은 '이름'을 줍니다. 값은 user13[key] 로 꺼냅니다.
// user13.key 라고 쓰면 undefined 가 세 번 나옵니다.
// -> for...in 반복문과 대괄호 표기법(user13[key])을 완벽하게 조합하여 객체의 모든 키와 값
을 깔끔하게 순회하고 출력하셨어요!

// ───── 문제 14 ───── (개념04 Object.keys)
// 아래 객체의 속성 개수를 출력하세요.

const scores14 = { 국어: 90, 영어: 85, 수학: 70, 과학: 95 };

// 기대 출력:
// 4

// TODO: 여기에 코드를 쓰세요
console.log(Object.keys(scores14).length);

// 객체에는 .length 가 없습니다. Object.keys 로 배열을 만든 뒤 세야 합니다.

// -> Object.keys() 메서드를 사용해 객체의 키들을 배열로 반환한 뒤, 배열의 length 속성을 
이용해 속성의 개수를 정확하게 계산해 출력하셨어요!


// ───── 문제 15 ───── (개념04 Object.values)
// 위 scores14 의 점수 합계를 출력하세요.
//
// 기대 출력:
// 340

// TODO: 여기에 코드를 쓰세요

let sum15 = 0;

for (const score of Object.values(scores14)) {
  sum15 += score;
}

console.log(sum15);

// 출력: 340
// -> Object.values() 메서드로 객체의 값들만 쏙쏙 골라낸 뒤,
for...of 반복문과 누적 합계를 활용해 모든 점수의 총합을 완벽하게 
계산해 내셨어요!

// ───── 문제 16 ───── (개념05 객체 배열)
// 아래는 객체가 담긴 배열입니다. 실무 데이터가 거의 이 모양입니다.
// 두 번째 상품의 이름과, 세 번째 상품의 가격을 차례로 출력하세요.

const products16 = [
  { name: "아메리카노", price: 4000, stock: 10 },
  { name: "라떼", price: 4500, stock: 0 },
  { name: "케이크", price: 6000, stock: 3 },
];

// 기대 출력:
// 라떼
// 6000

// TODO: 여기에 코드를 쓰세요

console.log(products16[1].name);
// 출력: 라떼
console.log(products16[2].price);
// 출력: 6000
// 배열[인덱스].속성 순서로 꺼냅니다.
// products16 은 배열이므로 products16.name 이라고 쓰면 undefined 입니다.

// -> 배열의 인덱스 접근 방식과 객체의 점 표기법을 완벽하게 조합하여, 실무에서 가장 흔하게 
다루는 데이터 구조를 훌륭하게 파헤쳐 내셨어요!

// ───── 문제 17 ───── (개념05 객체 배열 반복)
// products16 을 for...of 로 돌면서 "이름 가격원" 을 한 줄씩 출력하세요.
// 그다음 재고가 0인 상품의 이름을 "품절: OOO" 형태로 출력하세요.
//
// 기대 출력:
// 아메리카노 4000원
// 라떼 4500원
// 케이크 6000원
// 품절: 라떼

// TODO: 여기에 코드를 쓰세요

for (const p of products16) {
  console.log(`${p.name} ${p.price}원`);
}
// 재고가 0인 상품 찾기
let soldOut17 = null;
for (const product of products16) {
  if (product.stock === 0) {
    soldOut17 = product;
    break; // 찾았으니 더 볼 필요가 없습니다
  }
}
// -> 반복문과 조건문을 결합해 전체 상품 목록을 깔끔하게 출력하고, 조건에 맞는 품절
상품까지 정확하게 찾아내어 멋지게 출력하셨어요.

// ───── 문제 18 ───── [응용]
// 아래 장바구니에서 각 줄과 합계를 출력하세요.
// 각 줄의 금액은 price × count 입니다.

const cart16 = [
  { name: "아메리카노", price: 4000, count: 2 },
  { name: "케이크", price: 6000, count: 1 },
  { name: "쿠키", price: 3000, count: 3 },
];

// 기대 출력:
// 아메리카노 x2 = 8000원
// 케이크 x1 = 6000원
// 쿠키 x3 = 9000원
// 합계 23000원

// TODO: 여기에 코드를 쓰세요


let totalAmount =0;

for (const item of cart16) {
  const itemTotal = item.price * item.count;
  totalAmount += itemTotal;
  console.log(`${item.name} x${item.count} = ${itemTotal}원`);
}

console.log(`합계 ${totalAmount}원`);
// -> 장바구니 데이터를 순회하며 각 상품의
소계(가격 x 수량)를 구하고, 전체 총합까지 변수에
누적하여 기대 출력과 완벽하게 일치하는 결과를 만들어내셨어요!



// ───── 문제 19 ───── [도전]
// 아래 학생 목록에서 평균 점수가 가장 높은 학생의 이름과 평균을 출력하세요.
// 평균은 소수 첫째 자리까지 표시합니다.

const students17 = [
  { name: "김민준", scores: [90, 85, 70] },
  { name: "이서연", scores: [95, 88, 92] },
  { name: "박지훈", scores: [60, 75, 80] },
];

// 기대 출력:
// 이서연 91.7

// TODO: 여기에 코드를 쓰세요

let topStudent = "";
let maxAverage = -1;

for (const student of students17) {
  let sum = 0;
  for (const score of student. scores) {}
  sum += score;
}
const average = sum / studnet. scores.length;
if (average > maxAverage) {
maxAverage = maxAverage;
topStudent = student.name;
}
}
console.log(`${topStudent} ${maxAverage.toFixed(1)}`);
배열 안의 객체, 객체 안의 배열(점수 목록), 중첩 반복문을 통합 합계 계산, 그리고
toFixed(1)을 이용한 소수점 포맷팅까지 난도가 꽤 높은 복합 로직인데,
전체적인 알고리즘의 흐름을 아주 훌륭하게 잘 짜셨습니다.

// ───── 문제 20 ───── (에러 확인 — 맨 마지막)
// 아래 두 줄의 주석을 풀고 실행해서 어떤 에러가 나는지 확인하세요.
// 확인했으면 반드시 다시 주석 처리하세요.

// const empty18 = {};
// console.log(empty18.seller.name);

// 무슨 에러가 났나요? 에러 없이 처리하려면 어떤 기호를 쓰면 될까요?
// 답: _________TypeError (Cannot 
// read Properties Of Undefiend_, 
// 옵셔널 체이닝(?.)기호_________________________________
