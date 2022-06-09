module.exports = function(app){
    app.get('/form_noticias' , (req,res) => {
        res.render('admin/form_add_noticias')
    })
}
