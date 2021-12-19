const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;



app.use(express.static('public'));
// son como valores estaticos sobre una direccion
app.use('/css',express.static(__dirname+'public/css'));
app.use('/js',express.static(__dirname+'public/js'));

app.get('/' , (req , res)=>{
   console.log(path.join(__dirname,'../views/index.html'));
   res.status(201).sendFile(path.join(__dirname,'../views/index.html'));
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))