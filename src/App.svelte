<script>
  import Header from "./components/Header.svelte";
  import MovieList from "./components/movies/MovieList.svelte";
  import Footer from "./components/Footer.svelte";

  let search = "";
  let getSearchResult;
  let page = 1;
</script>

<Header bind:search {getSearchResult} bind:page />
<main>
  <MovieList {search} bind:getSearchResult bind:page />
</main>
<Footer />

<style>
</style>
