// const fs = require('fs');

// // * loadData전용 라우팅 /data 엔드폰이트로 작성된다.
// // * data.json을 읽도록 요청받은 것을 해결하여 데이터를 보낸다.

// app.get('/data', (req, res) => {
//   const dataPath = path.join(__dirname, './public/data/data.json');
//   const data = fs.readFileSync(dataPath, 'utf8');
//   res.send(data);
// });


// // * writeData 전용 라우팅 /save-text
// // * talkData.json을 읽어온 후, 
// // 1. 다시 문서화 
// // 2. 새로운 데이터 업로드 후에
// // 3. 업데이트 된 내용을 다시 저장한다.
// app.use(express.json());
// app.post('/save-text', (req, res) => {
//     const text = req.body.text;
    
//     // 파일 경로 설정
//     const filePath = path.join(__dirname, './public/data/data.json');

//     // 파일의 현재 내용 읽기
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).json({ error: 'Failed to read the file.' });
//         }
//         // 1. 다시 문서화
//         let texts = [];
//         if (data) {
//             texts = JSON.parse(data);
//         }

//         // 2. 새로운 text 추가
//         texts.push(text);

//         // 3.. 파일에 업데이트 된 내용 저장
//         fs.writeFile(filePath, JSON.stringify(texts, null, 2), (err) => {
//             if (err) {
//                 return res.status(500).json({ error: 'Failed to write to the file.' });
//             }

//             res.status(200).json({ message: 'Text saved successfully!' });
//         });
//     });
// });