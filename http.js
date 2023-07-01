const http = require('http')

const server= http.createServer((req,res)=>{
    console.log(req)
    res.write("This is my Home Page")
    res.end()
})
server.listen(5000)