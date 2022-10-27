const url = require("url");
let fs = require('fs');

const file = {
        a: fs.readFileSync('a.html', 'utf8'),
        b: fs.readFileSync('b.html', 'utf8'),    
        c: fs.readFileSync('c.html', 'utf8'),
}

const pagehttp= function (req, res) {     
    url_parts = url.parse(req.url, true);
    query = url_parts.query;

    res.writeHead(200, {'Content-Type': 'html'});
    if(url_parts.query.q=='a'){ res.end(file.a) }
        else if(url_parts.query.q=='b'){ res.end(file.b) }
        else { res.end(file.c) }
}

module.exports = pagehttp;