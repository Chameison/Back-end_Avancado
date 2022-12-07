// importando modulos
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
const querystring = require('node:querystring');

// importando docuemtnos do urls.json
const data = require('./urls.json')

//funcao 
function writeFile(cb) {
    fs.writeFile(
        path.join(__dirname, 'urls.json'),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err
            cb('Operação realizada com sucesso')
        }
    )
}
// colocando o servidor para rodar na porta 3000
http.createServer((req, res) => {

    const { name, url, del } = URL.parse(req.url, true).query
    if (!name || !url) {
        return res.end(JSON.stringify(data))
    }
    if (del){
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message => res.end(message))
    }

    data.urls.push({name, url})
    return writeFile(message => res.end(message))
    // res.end(JSON.stringify(data))
}).listen(3500, () => console.log("API is Running..."))

