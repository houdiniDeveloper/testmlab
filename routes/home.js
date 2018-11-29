const Router = require('koa-router');
const send = require('koa-send');
const mongoose = require('mongoose');
require('../models/photo');

const Photo = mongoose.model('photos');

const router = new Router();

router.get('/', async ctx =>{
    await send(ctx, '/views/index.html');
});

/*
router.post('save', async ctx =>{
  
  const body = ctx.request.body;
  
   
    const newPhoto = new Photo({
        image: body.image
    });
    
    try{
        const photo = await newPhoto.save();
      await console.log('saved');
      await console.log('########');
       // ctx.body = `<img src="${photo.image}" alt="image"/>`;
        // ctx.body = photo; 
        ctx.body = {msg:"ok"};   
    }catch(error){
        console.log('error save ',error);
    }
    
   
});

*/
module.exports = router;