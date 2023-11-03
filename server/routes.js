

// * loadData전용 라우팅 /data 엔드폰이트로 작성된다.
// * data.json을 읽도록 요청받은 것을 해결하여 데이터를 보낸다.

app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, './public/data/data.json');
  const data = fs.readFileSync(dataPath, 'utf8');
  res.send(data);
});