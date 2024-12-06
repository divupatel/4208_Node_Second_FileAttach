const express = require('express');
const port = 8000;

const app = express();
const path = require('path');

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) =>{
    res.render('home');
})



app.listen(port,(err)=>{
    if(err){
        console.error(err);
        return false;
    }
    console.log(`Server is running at ${port}`);
})