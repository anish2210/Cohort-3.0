const express = require("express");
const app = express();

app.get('/api',function(req, res){
    res.json({
        name: "anish",
        surname: "jaiswal",
        Dob: "21 nov 2001"
    })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});