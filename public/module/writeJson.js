import { User } from "./class.js";

export const writeJson = async ()=>{
const input = document.getElementById('userInput');
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
  .then(data => {
    console.log("submit 버튼 작동, post를 보냅니다.", data);
  })
  .catch(
    err => console.error(err + "이러한 에러 발생")
    );

}