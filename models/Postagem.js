const bd = require('./bd');


bd.sequelize.authenticate().then(function () {
    console.log("Database has been connected with successfully!");
}).catch(function (fail) {
    console.log("Connection Without Sucessful: " + fail);
})

const Postagem = bd.sequelize.define('postagens', {
    titulo:
    {
        type: bd.Sequelize.STRING
    },
    conteudo:
    {
        type: bd.Sequelize.TEXT
    }
})

//Postagem.sync({ force: true })

module.exports = Postagem;