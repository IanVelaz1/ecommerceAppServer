const Interfaz=require('../../models/interfazModel/interfazModel');

module.exports=(app)=>{

app.get('/interfaz',(req,res)=>{
  Interfaz.obtenerInterfaz({},(error,interfaz)=>{
    if(error){
      res.json({success:false,msg:"error al obtener interfaz",error:error});
    }else{
      res.json({success:true,interfaz});
    }
  });
});

}