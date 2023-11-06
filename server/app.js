const express = require('express');
const app = express();
// import { User } from '../public/module/class.js';
// const User = require('../public/module/class.js');

// 테스트 전용 옵션
const path = require('path')
const fs = require('fs');


app.use(express.urlencoded({ extended : true })); // 폼데이터전용
app.use(express.json()); // 요청 body
app.use(express.static('public')); 

// 메인 페이지 라우트
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// * loadData전용 라우팅 /data 엔드폰이트로 작성된다.
// * data.json을 읽도록 요청받은 것을 해결하여 데이터를 보낸다.

app.get('/read-data', async (req, res) => {
  const filePath = path.join(__dirname, '../data/talkData.json');
  const data = fs.readFileSync(filePath, 'utf8')
  res.send(data);
});

// * writeData 전용 라우팅 /save-text
// * talkData.json을 읽어온 후, 
// 1. 다시 문서화 
// 2. 새로운 데이터 업로드 후에
// 3. 업데이트 된 내용을 다시 저장한다.
app.post('/save-text', (req, res) => {
  const text = req.body.inputValue;
  console.table(req.body); // 확인 완료
  // 파일 경로 설정
  const filePath = path.join(__dirname, '../data/talkData.json');
  // 파일의 현재 내용 읽기
  fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return res.status(500).json({ error: 'Failed to read the file.' });
  }
  // 1. 다시 문서화
  let texts = [];
  if (data) {
      texts = JSON.parse(data);
  }
  // console.log(data);
  
  // 2. 새로운 text 추가
  texts.push(text);

  // 3. 파일에 업데이트 된 내용 저장
  fs.writeFile(filePath, JSON.stringify(texts, null, 2), (err) => {
      if (err) {
          return res.status(500).json({ error: 'Failed to write to the file.' });
      }
    });
  });
  res.redirect('/');  
  // 사용자를 결과 페이지로 리디렉션합니다.
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
