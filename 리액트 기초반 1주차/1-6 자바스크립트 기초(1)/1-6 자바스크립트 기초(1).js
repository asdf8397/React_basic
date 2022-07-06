/** getElementsByClassName()
 * JS를 HTML에 연결해줄때 class로 연결했으면 getElementsByClassName()으로하고
 * JS를 HTML에 연결해줄때 id로 연결했으면 getElementsByid로 연결함
 */
const wraps = document.getElementsByClassName("wrap");
console.log(wraps);
const title = document.getElementById("title");
console.log(title);

// 색상을 주기 위해서 설정 JS에서 설정할 수 있음
title.style.backgroundColor = "yellow";


function SayHello(event) {
    console.log("Hello")
};

// const buttons = document.getElementsByClassName("button");
const buttons = document.getElementsByTagName("button");
/** button을 만들때 자체적인 button이라는 태그를 사용해서 만들었기 때문에
 * 이벤트를 발생시킬때 document.getElementsByTagName으로 해야한다.
 */

for (let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", SayHello)
};

// 버튼을 클릭했을때 색상이 회색으로 변화하는 ... 것
function changeBackgroundColor (index) { // 여기서 changeBackgroundColor를 onclick에서 가져옴
    let card = document.getElementsByClassName("todo_List")[index];
    // 눌렀을때 색상이 바뀌는 특정한 index만 색상이 변해야되기 때문에 그것만 index처리
    card.style.backgroundColor = "gray";
}

// createElement("div")는 JS에서 div를 생성할때 사용한다.
const new_div = document.createElement("div");
console.log(new_div); // 이상태에선 console 상에만 div를 생성한 상태

document.body.appendChild(new_div); // 실질적으로 만든 div를 넣어줘라
/** div
 * body태그 안에 appendChild를 넣어주어라
 * 쉽게 말해서 body태그 안에 넣어줄때 사용함
 */

/* JS로 DOM요소를 Controll해서 JS에서 div를 생성해봄*/
new_div.style.backgroundColor="green"; // JS에서 지정한 new_div에 초록색이라는 색상을 넣어줌
new_div.style.height = "100px";
new_div.style.width = "100px";