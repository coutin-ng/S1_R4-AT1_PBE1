const express = require("express");
const app = express();
const PORT = 8081;

app.get("/calculadora", (req, res) => {

    try {
        const { operacao, numUm, numDois } = req.query;
        let resultado;

        if (isNaN(numDois) || isNaN(numUm) || numDois == undefined || numDois == "" || numUm == undefined || numUm == "" || operacao == undefined || operacao == "") {
            return res.status(400).send(`Campo obrigatório não preenchido`);
        }
        if (operacao == "soma" || operacao == "+") {
             resultado = parseFloat(numUm) + parseFloat(numDois);
        }
        if (operacao == "subtracao" || operacao == "-") {
            resultado = parseFloat(numUm) - parseFloat(numDois);
        }
        if (operacao == "divisao" || operacao == "/") {
            resultado = parseFloat(numUm) / parseFloat(numDois);
        }
        if (operacao == "multiplicacao" || operacao == "*") {
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