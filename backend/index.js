const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const moviesRoutes = require('./routes/movies');

app.use('/api/movies', moviesRoutes);

app.listen(PORT, () => {
    console.log(`Backend rodando em http://localhost:${PORT}`);
});