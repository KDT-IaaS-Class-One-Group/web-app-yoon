console.log('index.js 시작');
// import { component } from "./module/component.js";
// import { User } from "./module/class.js";
// import { writeJson } from "./module/writeJson.js";
import { addComponent } from "./module/addComponent.js";
import { readJson } from "./module/readJson.js";
import { writeJson } from "./module/writeJson.js";

// 전역 변수
const container = document.getElementById('container'); 
const body = document.body;
const submit = document.getElementById('submit');
const input = document.getElementById('userInput');
console.log( submit, input, body );


// // 연습용 promsie function 작성
// function WritePromise(){
//   new Promise((resolve, reject) => {
//   try {
//     resolve(
//       writeJson()
//     );
//   } catch (error) {
//     reject(console.error("오류 발생, promise", err));
//   }
//   })
// };

// function readJsonPromise(){
//   new Promise((resolve, reject) => {
//   try {
//     resolve(
//       readJson((data)=>{    
//         addComponent(data);
//       })
//     );
//   } catch (error) {
//     reject(console.error("오류 발생, promise", err));
//   }
//   })
// };



// 이벤트 및 실행 함수들 모음 ---------
window.addEventListener('DOMContentLoaded',()=>{
  readJson((data)=>{    
    addComponent(data);
  });
});

submit.addEventListener('click',()=>{
  console.log("submit 이벤트 발생");
  if(input.value === ""){
    console.log("다시 입력해주십시오");
  } else {
    const promiseArry = [ writeJson, readJson ]
    Promise.all(promiseArry)
    .then(writeJson())
    .then(console.log('실행 완료, readJson 시작'))
    .then(readJson((data)=>{addComponent(data)}))
    .then(console.log('모든 로직 실행 완료'))
    // 결과 : 실행 완료, read시작, 

    .catch(err => console.log(err +"promise all 에러"))
  }
});

