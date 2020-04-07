
const mongoose = require('mongoose')
//apenas para tirar mensagem de advertencia
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')
