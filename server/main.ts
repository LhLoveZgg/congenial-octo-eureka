const Koa = require('koa');
const app = new Koa();
interface IloginQuery {
    username: string
    password: string
}
let query: IloginQuery  = {
    username: 'admin',
    password: 'root'
}
console.log('query=>', query)
app.use(async (ctx: { body: any; }): Promise<any> => {
  ctx.body = 'Hello World';
});
app.listen(3000, (): void =>{
    console.log('服务器启动在3000')
});