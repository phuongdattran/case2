<script>
  import axios from "../../axiosConfig";

  export let genreId;
  export let page;
  export let genreList;
  export let fetchMovies;

  const fetchGenres = async () => {
    const { data } = await axios.get("/genre/movie/list");
    genreList = data.genres;
  };

  genreList = fetchGenres();

  const handleChange = () => {
    page = 1;
    fetchMovies();
  };
</script>

<div class="container">
  {#await genreList}
    <p>Genres are loading...</p>
  {:then genres}
    <label for="genreSelect">Genre</label>
    <!-- svelte-ignore a11y-no-onchange -->
    <select id="genreSelect" bind:value={genreId} on:change={handleChange}>
      <option value={null}> All </option>
      {#each genres as { id, name } (id)}
        <option value={id}>
          {name}
        </option>
      {/each}
    </select>
  {:catch error}
    <p class="error">Something went wrong: {error.message}</p>
  {/await}
</div>

<style>
  .container {
    margin: 20px;
    text-align: center;
  }

  label {
    display: block;
    margin: 5px;
  }
</style>
