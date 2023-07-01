const {readFile,writeFile} = require('fs')

readFile('./content/subfolder/first.txt','utf8', (err, data) => {
    if (err) throw err;
    const first =data;
    console.log(data);
    readFile('./content/subfolder/second.txt','utf8', (err, data) => {
        if (err) throw err;
    
       const second=data;
       
       writeFile('./content/subfolder/result-Async.txt',`Here is the result:${first},${second}`,{flag:'a'}, (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    
    })
})



