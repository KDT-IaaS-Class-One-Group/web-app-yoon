const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended : true })); // 폼데이터전용
app.use(express.json()); // 요청 body
app.use(express.static('public')); 

// 메인 페이지 라우트
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// route 모듈을 활용하여 모든 라우팅을 모듈로 이관한다.
app.use(routes);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
