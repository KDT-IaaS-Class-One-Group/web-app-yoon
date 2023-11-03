console.log('index.js 시작');

import { component } from "./module/component.js";

const container = document.getElementById('container');
const submit = document.getElementById('submit');
const input = document.getElementById('userInput');
console.log(container, input);
// ! 눌렀을 때, 나타남, 로딩전에도 하나 만들어야 한다.
submit.addEventListener('click',async ()=>{
  const inputValue = input.value;
  console.log("dlsvnt",inputValue);
  await fetch('/save-text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({inputValue})
  })
  const response = await fetch('/read-data') // 요청 날리기
  response.json() // 반은 데이터 변환
  .then(data => {
    console.log("then 실행");
    console.table(data);

    let formTag = `
    <form action="/save-text" method="POST">
        <input type="text" id="userInput" name="userInput"> <div class="btn" id="submit">요청</div>
      </form>
    `;

    // 반복하여 컴포넌트 생성하는 로직 추가
    let result ="";
      for(let i=0; i<data.length; i++){
        result += component('div',{ class : "chat" },[data[i]])
      }
    container.innerHTML = result+formTag;

  })
  .catch(err => console.log("에러발생",err))

  })

