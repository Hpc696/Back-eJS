const http=require("http");
const url = require("url");
let fs = require('fs');
const host = 'localhost'
const port = '8080';

const pagehttp= function (req, res) {

    const a = fs.readFileSync('a.html', 'utf8');
    const b = fs.readFileSync('b.html', 'utf8');    
    const c = fs.readFileSync('c.html', 'utf8');
    
    url_parts = url.parse(req.url, true);
    query = url_parts.query;

    res.writeHead(200, {'Content-Type': 'html'});
    
    if(url_parts.query.q=='a'){ res.end(a) }
        else if(url_parts.query.q=='b'){ res.end(b) }
        else { res.end(c) } 
  };

  const server = http.createServer(pagehttp);
  server.listen(port,host,()=>{
      console.log(`server is running on http://${host}:${port}`);
  });