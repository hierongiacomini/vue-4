const DB = require('./db');
const Koa = require('koa');
const cors = require('@koa/cors');
const _ = require('koa-route');

const app = new Koa();

const threads = {
  index (ctx) {
    ctx.status = 200;
    ctx.body = {
      data: DB.threads,
    };
    ctx.set('Access-Control-Allow-Origin', '*');
  },

  show (ctx, slug) {
    const thread = DB.threads.find(thread => thread.slug === slug);
    ctx.set('Access-Control-Allow-Origin', '*');
    if (! thread) {
      return ctx.throw('Thread not found', 404);
    }

    const replies = DB.replies.filter(({ thread_id }) => thread_id === thread.id);

    ctx.body = {
      data: {
        ...thread,
        replies,
      },
    };
    ctx.status = 200;
    
  },
};
app.use(cors());
app.use(_.get('/threads', threads.index));
app.use(_.get('/threads/:slug', threads.show));

app.listen(process.env.API_PORT);

console.log('API is ready!');
