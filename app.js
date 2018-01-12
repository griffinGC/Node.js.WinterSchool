//메인파일

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.set('view engine', 'pug');
app.set('views','./views');
app.use(bodyParser.urlencoded({extended:false}))
app.get('/template', function(req,res){
  res.render('temp', {time:Date(), _title:'pug'});
});
app.get('/topic', function(req, res){
  var topic =[
    'Node js is...',
    'JavaScript IS...',
    'HTML is...',
    'Express is...'
  ]
  var output = `
  <a href="/topic?id=0">Node js</a><br>
  <a href="/topic?id=1">JavaScript</a><br>
  <a href="/topic?id=2">HTML</a><br>
  <a href="/topic?id=3">Express</a><br><br>
  ${topic[req.query.id]}
  `
//  res.send(output,'<img src="/bae.jpg">');
  res.send(output);

//  res.send('<img src="/bae.jpg">')
});
app.get('/semantic/:id/:mode',function(req,res){
  `<br>`
  var topic = [
  'Javascript is....',
  'Nodejs is...',
  'Express is...'
  ];
  var output = `
  <a href="/semantic/id=0/mode=name">JavaScript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br><br>
  ${topic[req.params.id]}`
//   res.send(output);
//바로 위에 실행하면 밑에것이 실행안됨~!
//위에것실행하면 링크 뜸
  res.send(req.params.id +',' + req.params.mode);
})
app.get('/form', function(req,res){
  res.render('forming');
})
app.get('/form_receiver',function(req,res){
  var title = req.query.title;
  var description = req.query.description;
  res.send(title +','+ description);
})
app.post('/form_receiver',function(req,res){
  //post방식을 사용할경우 이건 실행되지만 위에 get방식은 실행되지 않는다.
  var title = req.body.title;
  var description = req.body.description;
  res.send(title +','+ description);
})
app.locals.pretty = true;
app.use(express.static('public'));
app.get('/', function(req, res){
  res.send('Get out of my sight');
});

app.get('/login', function(req, res){
  res.send('<h1>Login Please</h1>');
});
app.get('/route', function(req, res){
  res.send('Hello Route, <img src ="/bae.jpg">');
});
app.get('/static', function(req, res){
  res.send('text.txt');
});
app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i = 0; i<5; i++){
    lis = lis +  '<li>coding</li>';
  }
  var time = Date();
  var output = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset = "utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic!
      <ul>
      ${lis}
      </ul>
      ${time}
    </body>
  </html>
`
  res.send(output);
});
app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
