const fs = require("fs");

const content = fs.readFileSync("dummy.txt", "utf-8");

for (let i = 0; i < 9999999999; i++) {}

console.log(content);
