const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// 메인 페이지 라우트
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
