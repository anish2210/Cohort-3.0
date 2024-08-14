const fs = require("fs");

const errorContent = fs.readFileSync('dummy.txt', 'utf8');

function clean(errorContent){
    return errorContent.replace(/\s+/g, ' ').trim();
}

const cleanContent = clean(errorContent);
console.log(cleanContent);