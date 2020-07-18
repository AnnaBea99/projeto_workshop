//Usando o express para criar e configurar meu servidor
const express = require("express");
const server = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis a, ullam hic nostrum labor",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis a, ullam hic nostrum labor",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis a, ullam hic nostrum labor",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão e Familía",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis a, ullam hic nostrum labor",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis a, ullam hic nostrum labor",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis a, ullam hic nostrum labor",
        url: "https://rocketseat.com.br"
    }

]


//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"));


//configuração do nunjucks
const nunjunks = require("nunjucks");
nunjunks.configure("views", {
    express: server,
    noCache: true,
});


//Criei uma rota
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];
    for (let idea of reversedIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", {ideas: lastIdeas})
})

server.get("/ideias", function(req, res) {
    const reversedIdeas = [...ideas].reverse();

    return res.render("ideias.html", {ideas: reversedIdeas})
})

//ligando o servidor na porta 3000
server.listen(3000)