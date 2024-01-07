import express from 'express';
const server = express();

server.get('/demo', (req, res) => {
    res.send('Hello, world')});

server.listen(8000, () =>{
    console.log('listening on 8000')
})