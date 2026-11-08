import {createServer} from 'node:http';

const port=Number(process.env.PORT||8080);
const host=process.env.HOST||'127.0.0.1';
const version=1;
if(!Number.isInteger(port)||port<1||port>65535)throw Error('Port invalid');

const server=createServer((request,response)=>{
 if(request.url==='/health'){
  response.writeHead(200,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});
  response.end(JSON.stringify({ok:true,version}));
  return;
 }
 response.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});
 response.end('Lipsește');
});
server.listen(port,host);
