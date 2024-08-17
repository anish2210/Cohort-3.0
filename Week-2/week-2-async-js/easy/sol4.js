const fs = require('fs')

const content = fs.readFileSync('dummy.txt', 'utf-8');

function write(){
    fs.writeFileSync("dummy.txt",`${content + " another New file content added form another file"}`)
}

write();