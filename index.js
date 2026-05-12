const express = require('express');
const rotasItens = require('./routes/itens');

const app = express();
const PORT = 3000;

// Habilita JSON
app.use(express.json());

// Rota base
app.use('/itens', rotasItens);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});