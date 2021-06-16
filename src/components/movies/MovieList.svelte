<script>
  import axios from "../../axiosConfig";
  import MovieItem from "./MovieItem.svelte";
  import Pagination from "./Pagination.svelte";
  import Filters from "./Filters.svelte";

  export let search;
  export let getSearchResult;
  export let page;

  let totalPages;
  let genreId = null;
  let genreList;

  const fetchMovies = async () => {
    let url = "/movie/popular";
    let queries = `?page=${page}`;

    // api cannot filter and search at the same time
    if (genreId && !search) {
      queries += `&with_genres=${genreId}`;
    }

    if (search) {
      url = "/search/movie";
      queries += `&query=${search}`;
    }

    const { data } = await axios.get(url + queries);
    totalPages = data.total_pages;
    promise = data.results;
  };

  getSearchResult = fetchMovies;
  let promise = fetchMovies();
</script>

<section>
  <Filters bind:page bind:genreId bind:genreList {fetchMovies} />
  {#await promise}
    <div id="spinnerContainer">
      <img src="images/loading.gif" alt="loading spinner" />
    </div>
  {:then movies}
    <div class="container">
      {#each movies as movie (movie.id)}
        <MovieItem {movie} {genreList} />
      {/each}
    </div>
    {#if movies.length}
      <Pagination bind:page {totalPages} {fetchMovies} />
    {:else}
      <p id="noMovie">Unfortunatly, there is no movie with this title</p>
    {/if}
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
  {/await}
</section>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 15px;
    border-bottom: 1px solid var(--greyBorder);
  }

  #spinnerContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
  }

  #noMovie {
    margin: 30px;
    text-align: center;
    font-weight: 700;
  }

  @media (max-width: 720px) {
    .container {
      display: inline-block;
      margin: 0px;
    }
  }

  @media (min-width: 721px) and (max-width: 1200px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
