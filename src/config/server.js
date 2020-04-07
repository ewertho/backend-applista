const port = 3003

//vai fazer a codificação que chegar para pagina
const bodyParser = require('body-parser')
//servidor padrão
const express = require('express')
//startar
const server = express()
//adicionar o cors
const allowCors = require('./cors')

/**receber urls e jsons e outros formularios, 
 * tag extended siginifica receber mais do que o padrão
 */
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server