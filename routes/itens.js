const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const ARQUIVO = path.join(__dirname, '..', 'data', 'itens.json');

function ler() {
    return JSON.parse(fs.readFileSync(ARQUIVO, 'utf-8'));
}

function salvar(dados) {
    fs.writeFileSync(ARQUIVO, JSON.stringify(dados, null, 2));
}

// GET
router.get('/', (req, res) => {
    res.json(ler());
});

// POST
router.post('/', (req, res) => {
    const dados = ler();

    const novo = {
        id: dados.length + 1,
        ...req.body
    };

    dados.push(novo);

    salvar(dados);

    res.status(201).json(novo);
});

module.exports = router;