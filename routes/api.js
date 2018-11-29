const Router = require('koa-router');
const mongoose = require('mongoose');
require('../models/photo');

const Photo = mongoose.model('photos');
const router = new Router();

router.get('/imagenes', async (ctx,next) =>{
   const q = JSON.parse(ctx.query.q); 
   console.log(q.desde);
   const photos = await Photo.find({}).skip(q.desde).limit(5).exec();

   ctx.body = await  photos;
   
});


module.exports = router;
