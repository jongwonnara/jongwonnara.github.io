/*
//require()는 node.js안에 포함된 함수 
//require-모듈문자열  node.js의 함수 : 해당 모듈을 가져와 사용하겠다라는 함수
var http = require('http'); 
//HTTP 규격을 통해서 서버를 생성하기 위해서.
//쉽게 이야기하면, 브라우저를 통해 연결되기 위해서
var fs = require('fs');   
//filesystem 모듈을 가져와 사용
//html 파일을 열리게 하기 위하여 사용한 모듈
http.createServer(function (request, response) {
    
    fs.readFile('abc.html', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });

});

server.listen(8080, function(){ // listen 대기 상태 
    console.log('Server is running...');
});
*/