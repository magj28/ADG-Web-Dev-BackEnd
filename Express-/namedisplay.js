const express= require('express');
const app=express();

app.get('/', (req,res)=>{
	res.send('Hello World')
});
app.get('/name', (req,res)=>{
	res.send('Hemangi')
});
app.get('/team', (req,res)=>{
	res.send('Susan Bob John Mary')
});

app.listen(3000, ()=> console.log('Listening to port 3000...'));
