console.log('index.js 시작');
// import { component } from "./module/component.js";
// import { User } from "./module/class.js";
import { writeJson } from "./module/writeJson.js";
import { addComponent } from "./module/addComponent.js";
import { readJson } from "./module/readJson.js";

// 전역 변수
const container = document.getElementById('container'); 
const body = document.body;
const submit = document.getElementById('submit');
const input = document.getElementById('userInput');
console.log( submit, input, body );


window.addEventListener('DOMContentLoaded',()=>{
  readJson((data)=>{    
    addComponent(data);
  });
});

submit.addEventListener('click',()=>{
  console.log("submit 이벤트 발생");
  // ! 모듈로 나눠봄직한 writefile 로직
  if(input.value === ""){
    console.log("다시 입력해주십시오");
  } else {

    new Promise((resolve, reject) => {
      try {
        resolve(
          writeJson()

        )

      } catch(err){
        console.error("오류 발생, promise", err)
      }
      readJson((data)=>{    
        addComponent(data);
      });
    })
  }
})
