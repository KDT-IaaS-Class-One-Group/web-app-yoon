
/**
 * 비동기로 "/read-data로 " 요청을 보냅니다.
 */
export const readJson = async ( callback )=>{
  // ! 모듈로 나눠봄직한 readJson 로직
  const response = await fetch('/read-data') // 요청 날리기
  response.json() // 받은 데이터 변환
  .then(data => {
    callback(data);
  })
  .catch(err => console.log("에러발생",err))
};