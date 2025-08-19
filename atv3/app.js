const express = require("express");
const app = express();
const PORT = 8081;

app.get("/operacao/:tipo", (req, res) => {

    try {
        const { tipo } = req.params
        const { numUm, numDois } = req.query;
        let resultado;

        if (isNaN(numDois) || isNaN(numUm) || numDois == undefined || numDois == "" || numUm == undefined || numUm == "") {
            return res.status(400).send(`Campo obrigatório não preenchido`);
        }
        if (tipo == "soma") {
            resultado = parseFloat(numUm) + parseFloat(numDois);
        }
        if (tipo == "subtracao") {
            resultado = parseFloat(numUm) - parseFloat(numDois);
        }
        if (tipo == "divisao") {
            resultado = parseFloat(numUm) / parseFloat(numDois);
        }
        if (tipo == "multiplicacao") {
            resultado = parseFloat(numUm) * parseFloat(numDois);
        }

        res.status(200).send(resultado);


    } catch (error) {

        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno no servidor!");
    }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});