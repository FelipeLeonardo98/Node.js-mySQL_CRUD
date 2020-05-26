const Sequelize = require('sequelize');
//Connection with Database
const sequelize = new Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("Database has been connected with successfully!");
}).catch(function (fail) {
    console.log("Connection Without Sucessful: " + fail);
})

//Model: Postagem
//define: for create table, 'postagem' is name of table
const Postagem = sequelize.define('postagem',
    {
        titulo:
        {
            type: Sequelize.STRING
        },
        conteudo:
        {
            type: Sequelize.TEXT
        }
    })

//for transfer this table to main database
//Postagem.sync({ force: true })

//For insert into table
/* Postagem.create({
    titulo: "Peaky Blinders",
    conteudo: "Sangue, Apostas e navalhas"
}) */

//Model: Usuario
const Usuario = sequelize.define('usuarios',
    {
        nome:
        {
            type: Sequelize.STRING
        },
        sobrenome:
        {
            type: Sequelize.STRING
        },
        idade:
        {
            type: Sequelize.INTEGER
        },
        email:
        {
            type: Sequelize.STRING
        }

    });

//Usuario.sync({ force: true })

/* Usuario.create({
    nome: "Felipe",
    sobrenome: "Leonardo",
    idade: 21,
    email: "felipe@dominio.com"
}) */