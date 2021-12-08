const path = require('path');
const express = require('express');
const app = express();
const userRoutes = require('./routes/usersRoutes');
const publicPath = path.join('./public');


app.listen(3001, ()=>{
    console.log("Server running in port 3001");
});
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./ejs/'));

app.use('/', userRoutes);
