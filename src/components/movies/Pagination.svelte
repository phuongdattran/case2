<script>
  export let page;
  export let totalPages;
  export let fetchMovies;

  const pagesList = Array.from({ length: totalPages }, (v, i) => i + 1);

  function handleClick(type) {
    if (type === "next") page++;
    else if (type === "previous") page--;
    fetchMovies();
    window.scrollTo(0, 0);
  }
</script>

<div class="container">
  {#if page > 1}
    <button on:click={() => handleClick("previous")}>Previous</button>
  {/if}
  <!-- svelte-ignore a11y-no-onchange -->
  <select bind:value={page} on:change={fetchMovies}>
    {#each pagesList as pageNumber (pageNumber)}
      <option value={pageNumber}>
        {pageNumber}
      </option>
    {/each}
  </select>
  {#if page < totalPages}
    <button on:click={() => handleClick("next")}>Next</button>
  {/if}
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    margin: 30px 0px;
  }

  select {
    position: relative;
    bottom: -15px;
  }
</style>
