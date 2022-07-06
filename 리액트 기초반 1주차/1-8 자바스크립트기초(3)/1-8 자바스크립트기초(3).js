/** Array 내장함수
 * map
 *
 */

/* map 내장함수 */
const array_num = [0,1,2,3,4,5];
const new_array = array_num.map((array_item) => {
    // console.log(array_item) // .map으로 반복문 돌린다.
    // console.log(array_item + 1) // .map으로 반복문을 돌리는데 +1을 해준 값으로 돌린다.
    return array_item +1;


});
console.log(new_array);
console.log(array_num);
/** .map
 * 원본배열을 손상시키지 않고 배열을 반복문을 실행시킨다.
 *
 * for문을 가지고 array_num을 배열 반복문을 해줘야하지만
 * .map()은 배열 길이를 자동을 반복문 해준다.
 * 
 * array_item은 array_num의 길이만큼 돌아야 하기 때문에
 * 그 대상을 array_item이라고 일단 지정함
 */

/* filter 내장함수 */
const array_num_filter = [0,1,2,3,4,5];
const new_array_filter = array_num_filter.filter((array_item_filter) => {
    return array_item_filter > 3; // 배열에서 3보다 큰 값을 빼낼때 filter사용
});
console.log(new_array_filter);
/** filter
 * 요소를 가공할순 없고 요소들 중에서 어떤 값을 만족하는 값을 찾아낼 순 있음
 */


/** concat 내장함수
 * concat은
 * array_num_sum1 = [0,1,2,3,4,5]
 * new_array_sum2 = [4,5]
 * array_num과 new_array의 배열을 합치고 싶을때 사용한다.
 */
let array_num_sum1 = [0,1,2,3,4,5];
let new_array_sum2 = [4,5];

const merge = array_num_sum1.concat(new_array_sum2);
console.log(merge); // output:[0, 1, 2, 3,4, 5, 4, 5]
// 배열이 합쳐진다 하지만 중복되서 배열이 합쳐진다.

/** 유사배열 from
 * .from은 my_name의 값을 하나씩 배열로 만들어준다.
 */

const my_name = "mean0";
const my_name_array = Array.from(my_name); // .from은 my_name의 값을 하나씩 배열로 만들어준다.
console.log(my_name_array); // [ 'm', 'e', 'a', 'n', '0' ]

const num_array = Array.from(my_name, (item,index) => {
    return index
});
/** 여기서 my_name의 값은 mean0이고 이것을 item에 m,e,a,n,0 하나씩 넣어주게 된다.
 * index자리에는 my_name의 mean0이 배열의 자리를 0,1,2,3,4 이렇게 자리를 계산하게 된다.
 */
console.log(num_array);
/** my_name = "mean0"을 num_array이라는 선언에 Array.from으로 배열로 넣어줬을때
 * my_name을 (item: mean0을 받는다 배열로, index: mean0배열을 숫자 0,1,2,3,4로
 * 계산해서 console.log(num_array);를 뽑아주면 mean0과 이것을 배열 number로
 * 나오게 된다.
 */

const new_Array = Array.from({length: 4}, (item, index) => {
    return index;
});
console.log(new_Array);
/** Array.from은 {여기에는 string으로  된 배열로 들어갈 수도 있고 number로 들어갈수도
 * 있고 length: 4로 지정해서 배열로 들어갈수도 있음 }
 *
 */

/** Quiz_Array 내장함수
 * (1) 배열에서 고양이가 몇 마리인지 세기 - map으로 바꿔보자
 *  cosnt animals = ["강아지","고양이","햄스터","강아지","고양이","고양이","토끼"];
 *
 *  let count = 0;
 *  for(let i = 0; i < animals.length; i++) {
 *      let animal = animals[i];
 *      if (animal === "고양이") {
 *          count += 1;
 *      }
 *  }
 *  console.log(count);
 */

const animals = ["강아지","고양이","햄스터","강아지","고양이","고양이","토끼"];

 let count = 0;
 for(let i = 0; i < animals.length; i++) {
     let animal = animals[i];
     if (animal === "고양이") {
         count += 1;
     }
 }
 console.log(count);

 /* 직접 풀어봄 */
 const my_Animal = ["강아지","고양이","햄스터","강아지","고양이","고양이","토끼"];
 // const my_Animal_array = Array.from(my_Animal); -- 여기서 이것은 배열에 담을때 사용
const cat_count = my_Animal.map((how_Many_Cat) => {
    return how_Many_Cat
});
console.log(cat_count)
// ['강아지', '고양이','햄스터', '강아지','고양이', '고양이','토끼']

const how_many_cats = cat_count.filter((array_cat) => {
    return array_cat === "고양이"
});
console.log(how_many_cats);
console.log(how_many_cats.length);

const ANIMAL = ["강아지","고양이","햄스터","강아지","고양이","고양이","토끼"];
let input_count = 0;
ANIMAL.map((animals) => {
    if (animals === "고양이") {
        input_count += 1; // 이게 왜들어가지? 
    }
});
console.log(input_count);

// 배열에서 filter로 해보자
const animal_A = ["복슬 강아지","검정 고양이","노란 햄스터","강아지","노랑 고양이","고양이","흰 토끼"];
let CATS = [];
for (let i = 0; i < animal_A.length; i++) {
    let animal_B = animal_A[i];
    if (animal_B.indexOf("고양이") !== -1) { // 여기서 !== -1은 포함이 안되어있다는 뜻
        CATS.push(animal_B);
    }
}
console.log(CATS);

// 이거 물어보자
const new_Animal_List = ["복슬 강아지","검정 고양이","노란 햄스터","강아지","노랑 고양이","고양이","흰 토끼"];
const newMakeArray = new_Animal_List.filter((Array_item) => {
    return Array_item.indexOf("고양이") !== -1; // 여기서 !== -1은 포함이 안되어있다는 뜻
});
console.log(newMakeArray);

/** 두 배열을 합쳐보자 concat으로 해보자
 * const dogs = ["검은 "강아지","노란 강아지","흰 강아지"];
 * const casts = ["검정 고양이","복슬 고양이","노란 고양이"];
 *
 * const arraySum = dogs.concat(cats);
 * console.log(arraySum);
 */

const dogs = ["검은 강아지","노란 강아지","흰 강아지"];
const cats = ["검정 고양이","복슬 고양이","노란 고양이"];

const arraySum = dogs.concat(cats);
console.log(arraySum);