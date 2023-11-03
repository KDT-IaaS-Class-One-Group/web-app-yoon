const express = require('express');
const app = express();

// 테스트 전용 옵션
const path = require('path')
const bodyParser = require('body-parser');
const fs = require('fs').promises;

app.use(express.json());
app.use(express.static('public'));

// 메인 페이지 라우트
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});



// * loadData전용 라우팅 /data 엔드폰이트로 작성된다.
// * data.json을 읽도록 요청받은 것을 해결하여 데이터를 보낸다.

app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, './public/data/data.json');
  const data = fs.readFileSync(dataPath, 'utf8');
  res.send(data);
});


// * writeData 전용 라우팅 /save-text
// * talkData.json을 읽어온 후, 
app.post('/save-text', async (req, res) => {
  const url = req.body.url;

  // 외부 placeholder와 같은 주소를 가져옵니다. (이 예제에서는 가져오는 코드는 생략되었습니다.)

  // asset 폴더에 정보 저장
  const data = {
      lastSubmittedURL: url,
      timestamp: new Date().toISOString()
  };

  await fs.writeFile('./data/talkData.json', JSON.stringify(data, null, 2));

  res.redirect('/');  // 사용자를 결과 페이지로 리디렉션합니다.
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
