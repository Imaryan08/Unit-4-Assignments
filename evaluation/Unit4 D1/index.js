const express = require('express');
const app = express();

app.use(logger);

app.get('/books', (req,res) => {
    return res.send({ route: "/books"})
});

app.get('/libraries', permission('library'), (req,res) => {
    return res.send({ route: "/libraries ", permission: req.role})
});

app.get('/authors', permission('writer'), (req,res) => {
    return res.send({ route: "/authors ", permission: req.role})
});

function permission(check){
    return function(req, res, next){
        if(check === 'library' || check === 'writer')
            req.role = true;
        else
            req.role = false;

        next();
    }
}


function logger(req,res,next) {
    if( req.path === '/books' || req.path === '/authors' || req.path === '/libraries')
        console.log('correct path');
        
    next();
}


app.listen(8080, () => {
    console.log('listening port 8080');
})