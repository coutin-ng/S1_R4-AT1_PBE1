const express = require("express");
const app = express();
const PORT = 8081;

app.get("/imc", (req, res) => {

    try {
        const { altura, peso } = req.query;
        let imc;

        if (isNaN(altura) || isNaN(peso)) {
            return res.status(400).send(`Número inválido`);
        }

        imc = (peso / (altura * altura)).toFixed(2);
        
        if (imc < 18.5) {
            res.send(`<h1>${imc} -> Abaixo do peso</h1>`);
        }
        if (imc >= 18.5 && imc <= 24.9) {
            res.send(`<h1>${imc} -> Peso normal</h1>`);
        }
        if (imc >= 25 && imc <= 29.9) {
            res.send(`<h1>${imc} -> Sobrepeso</h1>`);
        }
        if (imc >= 30 && imc <= 34.9) {
            res.send(`<h1>${imc} -> Obesidade grau 1</h1>`);
        }
        if (imc >= 35 && imc <= 39.9) {
            res.send(`<h1>${imc} -> Obesidade grau 2</h1>`);
        }
        if (imc >= 40) {
            res.send(`<h1>${imc} -> Obesidade grau 3</h1>`);
        }

    } catch (error) {

        console.error("Erro capturado:", error);
        res.status(500).send("Erro interno no servidor!");
    }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});