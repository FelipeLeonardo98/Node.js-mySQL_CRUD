const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Postagem = require('./models/Postagem')
const sequelize = require('./models/bd')



//Configurations
//Template Engine: Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//body-Parser configuration
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.get("/", function (req, res) {
    Postagem.findAll().then(function (posts) {
        // Filtrando os dados antes de mandar para View
        const context = {
            postsContext: posts.map(post => {
                return {
                    titulo: post.titulo,
                    conteudo: post.conteudo
                };
            })
        };
        console.log(context)
        res.render("home", { posts: context.postsContext });
    });
});

/*app.get('/', async function (req, res) {
    const abelhas = await Postagem.findAll();
    const teste = { abelhas };
    console.log(abelhas)
    res.render('home', { posts: teste.postagens });
});*/






app.get('/cadastro', function (req, res) {
    res.render('formulario');
})

app.post('/adicionado', function (req, res) {
    Postagem.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        //res.send("Post registered with sucessfully!");
        res.redirect('/');
    }).catch(function (fail) {
        res.send("Ops, a fail has been ocurred... " + fail);
    })
})

app.get('/deletar/:id', function (req, res) {
    Postagem.destroy({ where: { 'id': req.params.id } }).then(function () {
        res.send("Post has been deleted with sucess!")
    }).catch(function (fail) {
        res.send("This post not exists")
    })
})




//Create of server
app.listen(8081, function () {
    console.log("Server is running...");
});