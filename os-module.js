const os= require('os')
//user info
const user = os.userInfo()
console.log(user)

//system running time

console.log("the system is running",os.uptime(),`seconds`)

const currentOs ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs)