console.log('index.js 시작');

import { component } from "./module/component.js";

const container = document.getElementById('container');
const submit = document.getElementById('submit');
const input = document.getElementById('userInput');
console.log(container, input);
// , 눌렀을 때, 
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
  const response = await fetch('/read-data')
  const talkData = await response.json()
  .then(data => {
    console.log("then 실행");
    console.table(data);
    
    // document.querySelector('.pokeBox').textContent = data.text;
  })
  .catch(err => console.log("에러발생",err))

  })

