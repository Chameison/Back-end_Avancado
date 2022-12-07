const http = require('http')
const path = require('path') 
const fs = require('fs')
 
//
http.createServer((req, res)=>{

    const file = req.url === '/' ? 'index.html' : req.url  //operador ternario
    const filePath = path.join(__dirname, 'public',file)

    //pegando extensao do documento
    const extName = path.extName(filePath)

    //criando vetor dos que sao permitidos 
    const allowedFilesTypes = ['.html', '.js', '.css']

    //criando uma estrturoa que informamos quais arquivo podem passar e quais nao, definindo 
    // o rumo do servidor
    const allowed = allowedFilesTypes.find(
        (item) => item === extName 
    )

    //
    if (!allowed) return 
    
    //defifnindo as rotas para a aplicação
    fs.readFile(
        filePath, 
        (err, content) => {
            if(err) throw err
            res.end(content)
            }
    )
    
}).listen(6000, () => (console.log('Servidor rodando...')))