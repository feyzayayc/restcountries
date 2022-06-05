const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser')
const pageRouter = require('./src/routers/page_routers');
const expressLayouts = require('express-ejs-layouts');

// app.use(bodyParser.json())

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(expressLayouts); // her istek ilk önce expressLayouts'a gitsin

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));


app.use('/', pageRouter);
app.use('/blog', pageRouter);


// app.use(express.urlencoded({extended: true}));


app.listen(5000, () => {
    console.log('listening on port 5000');
})