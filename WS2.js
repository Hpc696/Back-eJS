const http=require("http");
const host = 'localhost'
const port = '8080';
const pagehttp = require("./module");

pagehttp;

const server = http.createServer(pagehttp);
server.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`);
});