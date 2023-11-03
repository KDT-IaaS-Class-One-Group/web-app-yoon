console.log('index.js 시작');

import { component } from "./module/component.js";

const container = document.getElementById('container');
const submit = document.getElementById('submit');
const input = document.getElementById('userInput');
console.log(container, input);
// DOMContentLoaded
submit.addEventListener('click',async ()=>{
  const inputValue = input.value;
  console.log("dlsvnt",inputValue);
  const response = await fetch('/read-data');
  await fetch('/save-text', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({inputValue})
  })

    // document.querySelector('.pokeBox').textContent = data.text;

  })

