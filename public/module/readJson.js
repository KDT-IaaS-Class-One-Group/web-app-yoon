
/**
 * 비동기로 "/read-data로 " 요청을 보냅니다.
 * @param {function} callback 비동기적으로 data를 다룰 함수를뒤에 작성합니다.
 */
export const readJson = async ( callback )=>{
  console.log(`readJson 시작`);
  const response = await fetch('/read-data') // 요청 날리기
  response.json() // 받은 데이터 변환
  .then(data => {
    callback(data);
  })
  .catch(err => console.log("에러발생",err))
};