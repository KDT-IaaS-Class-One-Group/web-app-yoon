import { User } from "./class.js";
// 객체 생성을 통한 데이터 저장 후
  // fetch를 통한 post 요청을 보내는 writeJson 함수

// 객체 생성을 통한 데이터 저장 후 fetch를 통한 post 요청을 보내는 writeJson 함수
export const writeJson = async () => {
  // 변수 선언
  const input = document.getElementById('userInput');
  // user객체 안에 대입
  let inputValue = new User(input.value);
  console.log("dlsvnt", inputValue);
  
  try {
    // fetch를 통한 post 요청
    const response = await fetch('/save-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputValue })
    });
    // console.log(response.ok); // true
    // promise의 단점 네트워크 response.ok에러
    if (!response.ok) {
      console.error('네트워크 response.ok 에러');
    }
    // 확인용 콘솔로그
    console.log("submit 버튼 작동 완료, post를 보냅니다.");
  } catch (err) {
    console.error("이러한 에러 발생", err);
  }
};