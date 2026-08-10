<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'


import { pesquisarFilme } from "./services/tmdbApi.js";

async function testTMDBApi() {
    try {
        const resultado = await pesquisarFilme("Interestelar");

        console.log(resultado);
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
        <button id="teste" @click="testTMDBApi">
            Test TMDB API
        </button>
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


