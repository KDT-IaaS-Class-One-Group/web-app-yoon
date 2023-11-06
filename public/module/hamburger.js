console.log('hbg module rdy');
const topbtn = document.getElementById('hbg-top');
const hbgCont = document.getElementById('hamburgerContainer');
const root = document.getElementById('root');
const container = document.getElementById('container');

// 1. 버튼을 누르면 이벤트
topbtn.addEventListener('click',()=>{
  // 햄버거 컨테이너를 왼쪽으로 이동
  if(container.style.width=== "100vw"){
    container.style.width= "80vw";
    hbgCont.style.left = "0";
  }else{
    container.style.width = "100vw";
    hbgCont.style.left = "-15vw";
  }
});