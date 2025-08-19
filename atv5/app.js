const express = require("express");
const app = express();
const PORT = 8081;

app.get("/saudacao/:nome", (req, res) => {

    try {
        const { nome } = req.params;
        const { hora } = req.query;

        if (hora == undefined || hora == "" || isNaN(hora) || hora < 0 || hora > 23) {
            return res.status(400).send(`Campos obrigatórios não preenchidos ou número inválido!`)
        }
        if (hora < 12) {
            res.send(`<h1>Bom dia, ${nome}!</h1>`);
        }
        else if (hora < 19) {
            res.send(`<h1>Boa tarde, ${nome}!</h1>`);
        }
        else{
            res.send(`<h1>Boa noite, ${nome}!</h1>`);
        }

    } catch (error) {

        console.error("Erro capturado:", error)
        res.status(500).send("Erro interno no servidor!")
    }

});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});