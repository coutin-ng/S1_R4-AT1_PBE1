const express = require("express");
const app = express();
const PORT = 8081;

app.get("/soma/:numUm/:numDois", (req, res) => {

    try {
        const { numUm } = req.params;
        const { numDois } = req.params;

        if (isNaN(numDois) || isNaN(numUm)) {
            return res.status(400).send(`Número inválido`)
        }

        res.send(`<h1>O resultado da soma é: ${parseFloat(numUm) + parseFloat(numDois)}</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error)
        res.status(500).send("Erro interno no servidor!")
    }

});

app.get("/subtracao/:numUm/:numDois", (req, res) => {

    try {
        const { numUm } = req.params;
        const { numDois } = req.params;

        if (isNaN(numDois) || isNaN(numUm)) {
            return res.status(400).send(`Número inválido`)
        }

        res.send(`<h1>O resultado da subtração é: ${parseFloat(numUm) - parseFloat(numDois)}</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error)
        res.status(500).send("Erro interno no servidor!")
    }

});

app.get("/multiplicacao/:numUm/:numDois", (req, res) => {

    try {
        const { numUm } = req.params;
        const { numDois } = req.params;

        if (isNaN(numDois) || isNaN(numUm)) {
            return res.status(400).send(`Número inválido`)
        }

        res.send(`<h1>O resultado da multiplicação é: ${parseFloat(numUm) * parseFloat(numDois)}</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error)
        res.status(500).send("Erro interno no servidor!")
    }

});

app.get("/divisao/:numUm/:numDois", (req, res) => {

    try {
        const { numUm } = req.params;
        const { numDois } = req.params;

        if (numDois == 0 || isNaN(numDois) || isNaN(numUm)) {
            return res.status(400).send(`Número inválido`)
        }

        res.send(`<h1>O resultado da divisão é: ${parseFloat(numUm) / parseFloat(numDois)}</h1>`);

    } catch (error) {

        console.error("Erro capturado:", error)
        res.status(500).send("Erro interno no servidor!")
    }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});