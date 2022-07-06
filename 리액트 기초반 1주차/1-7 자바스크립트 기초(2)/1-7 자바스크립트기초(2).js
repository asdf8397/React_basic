/** var, let, const
 */
var a = 1; // 호이스팅 가능

// let은 재할당 가능하다.
let b = 1; // let b = 1; 은 선언과 할당을 한번에 한다.
b = 2; // 재할당한다.

// const는 상수선언한다.,, 재할당과 재선언도 안된다.
const c = 1;

function scope() {
    const a = 0;
    let b = 0;
    var c = 0;

    if (a === 0) {
        const a = 1;
        let b = 1;
        var c = 1;
        console.log(a, b, c);
    }
    console.log(a, b, c);
}
scope(); // c가 호이스팅되서 찍힘 1로

/** 함수의 종류
 * 함수 선언식
 * function do_somthing() {}
 * 
 * 함수 표현식
 * let do_something = function [함수이름] () {}
 * 함수 표현식에서 함수이름은 생략해도 괜찮음
 *
 * 화살표 함수
 * let do_something = () => {}
 */

/** Class
 * 클래스란?
 * 객체 지향 프로그래밍에서 클래스를 특정 객체를 생성하기 위해 변수와 함수를 정의하는
 * 일종의 틀을 말합니다. 객체를 정의하기 위한 상태와 함수로 구성되어 있음
 * 객체 단위로 코드를 그룹화하고 쉽게 재사용하려고 사용한다.
 * 
 * 클래스를 구성하는 것
 * Class Cat {
 *     // 생성자 함수
 *     constructor(name) {
 *         // 여기서부터 this는 이 클래스입니다.
 *         this.name = name;
 *     }
 * };
 */

/* 클래스 간단 실습 */
class Cat {
    constructor(name) {
        this.name = name; // this.name = name;는 class Cat을 썼기 때문에 나자신을 말한다.
    }
    showName() {
        console.log(this.name);
    }
}
let cat = new Cat("perl");
console.log(cat.showName());
console.log(Cat);

class MyCat extends Cat {
    constructor(name, age) { // constructor(name, age)는 상속 받을 값 name과 age
        // super(); // 부모 클래스에 접근하는 방법 super
        super(name);
        this.age = age;
    }
    showName() {
        console.log(this.name + "입니다.");
    }

    showAge() {
        console.log(this.age);
    }
}
let my_cat = new MyCat("perl", 4);
console.log(my_cat.showAge());
console.log(my_cat.showName());

/** JS에서 등호의 개념
 * = 대입
 * =는 할당을 뜻합니다.
 * 어떤 변수에 값을 할당할 때 써요
 * 
 * == 느슨한 비교
 * 유형을 비교하지 않는 등차에요
 * 변수 값을 기반으로 비교합니다.
 * ex) 0 == "0"을 true로 반환합니다.
 *
 * === 엄격한 비교
 * ===도 등차입니다.
 * 유형도 비교하는 등차에요 엄격한 비교죠!
 * ex. 0 === "0" false입니다.
 * => 0은 숫자(number)이고, "0"은 문자(string)입니다.
 */

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [...a1, ...a2]; // 배열을 합칠 수 있음 이렇게
console.log(a3); // [1,2,3,4,5,6]

/** 삼항연산자는 if문의 단축 형태
 * 예시)
 * let is = 5;
 * let e = is === 5? 3:4;
 * 예를 들어 e가 5일때 비교 5일경우 3이고(?) 아니면 4이다.
 */