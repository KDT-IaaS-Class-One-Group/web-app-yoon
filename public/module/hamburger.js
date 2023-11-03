console.log('hbg');
// ! 햄버거 변수, 나중에 수정해야 한다.
const topbtn = document.getElementById('hbg-top');
const hbgCont = document.getElementById('hamburgerContainer');
const root = document.getElementById('root');
console.dir(root);
console.log(hbgCont, topbtn);

// 1. 버튼을 누르면 이벤트
topbtn.addEventListener('click',()=>{
  // 햄버거 컨테이너를 왼쪽으로 이동

  // root의 스타일을 추가 제거
  root.classList.toggle('justify-center');
});