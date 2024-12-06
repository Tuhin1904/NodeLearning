const express = require('express');
// const fs = require('fs');

const connectMoongose = require('./connection');
const { logReq } = require('./middlewares');
const userRouter = require('./routes/users');

const app = express();
const PORT = 8000;

//Connect
connectMoongose('mongodb://127.0.0.1:27017/tuhin-1')
     .then(() => console.log('Db connected'))
     .catch((err) => console.log('error', err));;

//Log generator
app.use(logReq('log.txt'));

//Middleware plugin
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));
