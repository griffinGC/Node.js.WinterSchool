var fs = require('fs');
//Sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//Async
console.log(2);
var data2 = fs.readFile('data2.txt',{encoding:'utf8'},function(err,data){
    console.log(3);
    console.log(data); // data2는 결국 앞에서 불러온 파일을 뜻한다.
})
console.log(4);
