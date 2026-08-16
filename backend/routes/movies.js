const express = require('express');
const router = express.Router();

const tmdbService = require('../services/tmdbService');
const fileService = require('../services/fileService');

// Buscar filmes no TMDB
router.get('/search', async (req, res) => {
    try {
        // Exemplo:
        // http://localhost:3000/api/movies/search?query=batman&include_adult=false&language=pt-BR&primary_release_year=2022&page=1&region=BR&year=2022

        console.log("Parâmetros recebidos:", req.query);

        const { query } = req.query;

        if (!query) {
            return res.status(400).json({
                error: 'O parâmetro query é obrigatório.'
            });
        }

        const filmes = await tmdbService.buscarFilmes(req.query);

        res.json(filmes);

    } catch (error) {
        console.error("Erro ao buscar filmes:", error);

        res.status(500).json({
            error: error.message || 'Erro ao buscar filmes.'
        });
    }
});

module.exports = router;