const Koa = require('koa')
const next = require('next')
const Router = require('@koa/router')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const cors = require('koa2-cors');

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/home', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/home', ctx.query)
    ctx.respond = false
  })

  router.get('/navi', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/navi', ctx.query)
    ctx.respond = false
  })

  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })
  server.use(cors());
  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
