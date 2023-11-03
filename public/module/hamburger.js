console.log('hbg');
// ! 햄버거 변수, 나중에 수정해야 한다.
const topbtn = document.getElementById('hbg-top');
const hbgCont = document.getElementById('hamburgerContainer');
const root = document.getElementById('root');
const container = document.getElementById('container');
console.dir(root);

// const widthSetInterval = (range) => {
//   let temp = 0;
//   let nowWidth = 80;
//   let movement = setInterval(()=>{
//     if(temp < range) {
//       temp++;
//       console.log(temp);
//       container.style.width = nowWidth + temp+"vw";
//     } else {
  //       clearInterval(movement)
  //     }
  //   }, 1)
  // }
  
  // widthSetInterval(20);
  
  
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


  // root의 스타일을 추가 제거
  // root.classList.toggle('justify-center');
// ! else를 옮길 값으로 정해야 한다. 왜? 기본이 "" 이기 때문에
// 이것도 폐기 애니메이션이 없어서.
  // if(root.style.justifyContent === "center") {
  //   root.style.justifyContent = "end";
  // } else {
  //   root.style.justifyContent = "center";
  // }
});