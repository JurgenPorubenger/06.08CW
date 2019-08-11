const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const userArticles = require('./routes/articles');


app.set('view engine', 'ejs');
app.use('/',indexRouter);
app.use('/user',userRouter);
app.use('/articles',userArticles);
app.listen(3000, ()=>console.log('listen 3000'));