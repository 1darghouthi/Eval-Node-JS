const Joi=require('joi');
const express=require('express');
const app=express();
app.use(express.json());
const meteo=[
    {id: 1, name:'meteo1'},
    {id: 2, latitude:'meteo2'},
    {id: 3, longitude:'meteo3'},
    {id: 4, ville:'meteo3'},
]

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.post('/api/meteo', (req, res)=>{
    const schema={
        name: Joi.string().min(3).required()
    };

    const result=Joi.Validate(req.body, schema);
    
   if(result.error){
       res.status(400).send(result.error.details[0].message);
       return;
   }
  const met={
      id:meteo.length +1,
      altitude:req.body.name,
      longitude:req.body.name,
      ville:req.body.name
  };
  meteo.push(met);
  res.send(met);
  
  
});

app.put('/api/meteo/:id',(req,res)=>{
    const met=meteo.find(c.id===parseInt(req.params.id));
     if(!met) res.status(404).send('The meteo with the given id was ')
});
    //look up the course
    //if not existing, return 404
    //validate
    //if invalid, return 400 -  bad request
    const schema={
        name: Joi.string().min(3).required()
    };

    const result=Joi.Validate(req.body, schema);
    
   if(result.error){
       res.status(400).send(result.error.details[0].message);
       return;
   }
    //update course
    met.name=req.body.name;
    res.send(met);
});

function validateMet(met){
    const schema={
        name: Joi.string().min(3).required()
    };

    return Joi.Validate(met, schema);

}

app.get('/api/meteo.id',(req,res)=>{
    res.send(meteo);
    const met=meteo.find(c.id===parseInt(req.params.id));
     if(!met) res.status(404).send('The meteo with the given id was ')
});

// /api/courses/1

    req.send(met);
});
// PORT
const port=process.env.PORT|| 3000;
app.listen(port, () =>console.log(`listening on port ${port}...`));