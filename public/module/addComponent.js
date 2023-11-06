import { component } from "./component.js";

// 반복하여 컴포넌트 생성하는 로직 추가
export const addComponent = (data)=>{
  const container = document.getElementById('container');
  let result ="";
  for(let i=0; i<data.length; i++){
    result += component('div',{ class : "chat" },[data[i].message])
  };
  // 생성한 것을 container에 넣기
  container.innerHTML = result;
}

// Promise.all(promises).then(allData => {
//   let result = "";
//   allData.forEach(data => {
//     // data는 fetchData에서 반환된 개별 결과입니다.
//     result += component('div', { class: "chat" }, [data.message]);
//   });
  
//   // 생성한 컴포넌트들을 container에 넣습니다.
//   container.innerHTML = result;
// })
// .catch(error => {
//   console.error("Error while fetching data", error);
// });