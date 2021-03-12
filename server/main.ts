const Koa = require('koa');
const exec = require('child_process').exec
console.log(exec, 222)
const app = new Koa();
interface IloginQuery {
    username: string
    password: string
}
let query: IloginQuery  = {
    username: 'admin',
    password: 'root22'
}
console.log()
console.log('query=>', query)
app.use(async (ctx: { body: any; }): Promise<any> => {
  ctx.body = 'Hello World22';
});
app.listen(3000, (): void =>{
    console.log('服务器启动在3000')
});