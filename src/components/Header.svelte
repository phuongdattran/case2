<script>
  export let search;
  export let getSearchResult;
  export let page;

  const handleChange = () => {
    page = 1;
    getSearchResult();
  };

  const handleReset = () => {
    search = "";
    setTimeout(handleChange, 500);
  };
</script>

<header>
  <div id="logo" on:click={handleReset}>MOVIES</div>
  <div id="searchBar">
    <img
      on:click={handleChange}
      class="icon"
      src="images/search.svg"
      alt="search icon"
    />
    <input
      bind:value={search}
      type="text"
      id="search"
      name="search"
      placeholder="Search a movie"
      on:change={handleChange}
    />
    {#if search}
      <img
        on:click={handleReset}
        class="icon"
        src="images/close.svg"
        alt="reset icon"
      />
    {/if}
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    width: 100%;
    border-bottom: 1px solid var(--greyBorder);
    -webkit-box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.2);
  }

  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    max-width: fit-content;
    margin: 30px;
    padding: 0px 15px;
    font-weight: 700;
    font-size: 34px;
    color: #fff;
    background-color: var(--primaryColor);
    cursor: pointer;
  }

  #searchBar {
    display: flex;
    flex: 1;
    padding: 10px;
    margin: 30px;
    height: 25px;
    background-color: #eff1f3;
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    font-weight: 700;
    font-size: 1rem;
  }

  ::placeholder {
    color: rgb(180, 179, 179);
  }

  input:focus {
    outline: none;
  }

  .icon {
    margin-right: 15px;
    cursor: pointer;
  }

  @media (max-width: 720px) {
    header {
      display: block;
    }

    #logo {
      margin: 15px auto;
    }

    #searchBar {
      margin: 15px;
    }
  }
</style>
