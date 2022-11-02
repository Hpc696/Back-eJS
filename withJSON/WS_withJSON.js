const http=require("http");
const host = 'localhost'
const port = '8080';
const { json } = require("stream/consumers");

const server = http.createServer(((request, response) => {
    console.log('Now we have a http message with headers but no data yet.');
    console.log("url:"+request.url)
    console.log("method:"+request.method)

    if(request.method=='POST'){ //metodo post invocarlo con powershell(guarda Slack)
        request.on('data', chunk => {
            const json = JSON.parse(chunk.toString())
            console.log('dati', chunk.toString())});
            // console.log('tipo:', json.cognome);
        request.on('end', () => {
            console.log('No more data');
            response.end("ciao, questo e' posttt");
        })
    } else if(request.method=='GET'){ //metodo get (digita l'host su browser...)
        response.writeHead(200);
        response.end("questo e' getttttttt");

    }
   }));

server.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`);
});
