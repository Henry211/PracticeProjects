
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req,res) => {
    res.send([1,2,3]);
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
}); 

app.get('/api/courses/:id', (req,res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
}); 

// environment variable: PORT
const port = process.env.PORT || 3001;
app.listen(3001, () => console.log(`Listening on port ${port}...`));
