const app = require('./config/server')

const rotaHome = require('./app/routes/home')(app)
//rotaHome(app)

const rotaNoticias = require('./app/routes/noticias')(app)
//rotaNoticias(app)

const rotaFormNoticias = require('./app/routes/formulario_inclusao_noticias')(app)
//rotaFormNoticias(app)
/* app.get('/noticia' , (req,res) => {
    res.render('noticias/noticia')
}) */

// Função get do express para rotas
app.get('/tecnologia', (req,res)=>{
    res.render('secao/tecnologia')
})

app.listen(3000, ()=>{
    console.log('Servidor rodando em Localhost:3000 com express')
})

