const express = require('express');
const app = express();

app.use(logger);

app.get('/books', (req,res) => {
    return res.send({ route: "/books"})
});

app.get('/libraries', (req,res) => {
    return res.send({ route: "/libraries "})
});

app.get('/authors', (req,res) => {
    return res.send({ route: "/authors "})
});

function logger(req,res,next) {
    next();
}


app.listen(8080, () => {
    console.log('listening port 8080');
})