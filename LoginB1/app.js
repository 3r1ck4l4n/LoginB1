const express = require('express');
const app = express();
const userRoutes = require('./routes/usersRoutes');

app.listen(3001, ()=>{
    console.log("Server running in port 3001");
});
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', userRoutes);
