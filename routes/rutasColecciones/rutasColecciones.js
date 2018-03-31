const Coleccion=require('../../models/coleccionesModel/coleccionesModel');

module.exports=(app)=>{
  app.get('/colecciones',(req,res)=>{
    Coleccion.obtenerColecciones({},(error,coleccion)=>{
      if(error){
        res.json({success:false,msg:"error al obtener colecciones",error:error});
      }else{
        res.json({success:true,coleccion});
      }
    });
  });

  app.get('/colecciones/:id',(req,res)=>{
    const id=req.params.id;
   Coleccion.obtenerColeccionEspecifica(id,(error,coleccion)=>{
     if(error){
      res.json({success:false,msg:"error al obtener colecciones",error:error});
     }else{
       res.json({success:true,coleccion});
     }
   });
  });


}