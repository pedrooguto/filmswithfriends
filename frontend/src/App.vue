<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'


import { pesquisarFilme } from "./services/tmdbApi.js";
import { processarArquivo } from './services/LetterboxdWatchlist.js';

var teste="teste";
async function testTMDBApi() {
    try {
        const resultado = await pesquisarFilme(document.getElementById("testInput").value);
        await processarArquivo("C:\\Users\\Pedro\\Desktop\\novo projeto\\letterboxd-pedro_guto-2026-06-10-12-26-utc\\watchlist.csv");

        console.log(resultado);
        var resultadoString = "<br>";

        for(let i = 0; i < resultado.results.length; i++) {
            console.log("Title: " + resultado.results[i].title);
            resultadoString += "Title: " + resultado.results[i].title + "<br>";
        }
        
        document.getElementById("teste").innerHTML = "Test variable: " + resultadoString;

    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <!--<main>
    <TheWelcome />
    <button id="teste" @click="testTMDBApi">Test TMDB API</button>
  </main>-->
  <main>
        <button id="testebutton" @click="testTMDBApi">
            Test TMDB API
        </button>
        <input type="text" id="testInput" placeholder="Enter a movie title" />
        <h3>Check the console for the API response. </h3>
        <h3 id="teste">Test variable: {{ teste }}</h3>
    </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

</style>


