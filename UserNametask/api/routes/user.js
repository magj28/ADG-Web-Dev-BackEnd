const express= require('express');
const router= express.Router(); 

router.get('/:name', (req, res, next)=>{
	const name= req.params.name;
	res.status(200).json({
		message:'Hello',
		name: name
	});
});

router.post('/:name/:age', (req,res,next)=>{
	const name= req.params.name;
	const age= req.params.age;
	status="";
	if(age>=3 && age<=12)
		status= "Child"
	if(age>=13 && age<=18)
		status= "Teen"
	if(age>=19)
		status= "Adult"
	res.status(201).json({
		message:'Hello',
		name: name,
		age: age
	});
})


module.exports= router; 