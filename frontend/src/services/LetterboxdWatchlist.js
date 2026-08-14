import { pesquisarFilme } from './tmdbApi.js';
// WATCHLIST
// LAYOUT: Date,Name,Year,Letterboxd URI
//teste de uma linha só

export async function processarArquivo(caminhoArquivo) {
let linha = "2023-04-11,Funeral Parade of Roses,1969,https://boxd.it/28Cg";
debugger;

let campos = linha.split(",");

let resultadoPesquisa = await pesquisarFilme(campos[1]);

resultadoPesquisa.results.forEach(filme => {

});

}

