const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const koastatic = require('koa-static');
const routes = require('./routes/index');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const app = new koa();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://elpoeta:master11@ds217864.mlab.com:17864/testimgdb')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
app
    .use(koastatic('.'))
    .use(bodyparser())
    .use(routes.routes())
    .use(routes.allowedMethods())
    .listen(port, err => {
        if (err) console.error(err);
        console.log(`App Listening on Port ${port}`);
      });    