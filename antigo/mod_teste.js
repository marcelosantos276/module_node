/* const msg  = 'Este módulo contém apenas um texto'

module.exports = msg // Por convenção precisamos exportar o módulo */

// Módulo em forma de função
module.exports = function () {
    const msg = 'Este módulo contém apenas um texto'
    return msg
}