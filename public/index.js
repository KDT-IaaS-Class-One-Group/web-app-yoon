console.log('index.js 시작');
import { component } from "./module/component.js";
import { User } from "./module/class.js";

// 전역 변수
const container = document.getElementById('container'); 



window.addEventListener('DOMContentLoaded',async()=>{
  // ! 모듈로 나눠봄직한 readJson 로직
  const response = await fetch('/read-data') // 요청 날리기
  response.json() // 반은 데이터 변환
  .then(data => {
    console.log("then 실행");
    console.table(data);
    console.log(data);

    const formTag = `
    <label class="flex">
      <input type="text" name="massage" id="userInput"> 
      <div class="btn" id="submit">요청</div>
    </label>
    `;

    // 반복하여 컴포넌트 생성하는 로직 추가
    let result ="";
      for(let i=0; i<data.length; i++){
        result += component('div',{ class : "chat" },[data[i].message])
      }
    container.innerHTML = result+formTag;

    // 로딩 후 변수 선언
    const submit = document.getElementById('submit');
    const input = document.getElementById('userInput');
    console.log( submit, input );

  })
  .catch(err => console.log("에러발생",err))
});

submit.addEventListener('click',async ()=>{
  console.log("submit 이벤트 발생");
  // ! 모듈로 나눠봄직한 writefile 로직
  if(input.value === ""){
    console.log("다시 입력해주십시오");
  } else {
    // 객체 생성을 통한 데이터 저장
    let inputValue = new User(input.value);
    console.log("dlsvnt",inputValue);
    await fetch('/save-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({inputValue})
    })
    .then(data => console.log("submit 버튼 작동, post를 보냅니다.", data))
    .catch(err => console.error(err + "이러한 에러 발생"));


    const response = await fetch('/read-data'); // 요청 날리기
    console.log( "53번줄 response.json : "+response.json());
    response.json() // 반은 데이터 변환
    .then(data => {
      console.log("then 실행");
      console.table(data);

      let formTag = `
      <label class="flex">
        <input type="text" name="massage" id="userInput"> 
        <div class="btn" id="submit">요청</div>
      </label>
      `;

      // 반복하여 컴포넌트 생성하는 로직 추가
      let result ="";
        for(let i=0; i<data.length; i++){
          result += component('div',{ class : "chat" },[data[i].message])
        }
      container.innerHTML = result+formTag;
    })
    .catch(err => console.log("에러발생",err))  
  }
})
