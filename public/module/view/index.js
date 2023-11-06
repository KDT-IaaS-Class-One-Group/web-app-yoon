console.log('index.js 시작');
import { writeJson } from "../model/writeJson.js";
import { addComponent } from "../model/component/add.js";
import { readJson } from "../model/readJson.js";

// 전역 변수
const body = document.body;
const submit = document.getElementById('submit');
const input = document.getElementById('userInput');
console.log( submit, input, body );

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
    writeJson()
    .then(()=>{
      readJson(data=>addComponent(data))
    })
    .catch(err => console.log(err, "최종 로직 에러 발생"))
  }
});

