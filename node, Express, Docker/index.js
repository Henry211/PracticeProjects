
const express = require('express') //module
const app = express() // instance

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/foo', function (req, res){ // enpoint
    //res.send('Hello Henry´s PC')
    res.json({"foo":"bar"});
});

app.use(express.urlencoded({
    extended:true
}));

app.post('/bar', function(requ,res){
    var body = req.body;
    console.log(req.body.foo);
    res.send(req.body.foo);
});