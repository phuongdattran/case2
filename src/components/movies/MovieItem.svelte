<script>
  export let movie;
  export let genreList;

  const { original_title, overview, release_date, vote_average, genre_ids } =
    movie;

  const imgUrl = "https://image.tmdb.org/t/p/w185";

  let genreNames;

  $: if (genreList.length) {
    genreNames = genre_ids.map(
      (id) => genreList.find((genre) => genre.id === id).name
    );
  }
</script>

<div class="container">
  <div class="posterContainer">
    {#if movie.poster_path}
      <img
        class="poster"
        src={imgUrl + movie.poster_path}
        alt={original_title + " poster"}
      />
    {:else}
      <div class="noPoster"><p>No Image</p></div>
    {/if}
  </div>
  <div class="infoContainer">
    <h3>{original_title}</h3>
    <div class="infoDetails">
      <p class="vote">{vote_average / 2}/5</p>
      <p>{release_date}</p>
    </div>
    {#if genreList.length}
      <p class="genres">
        {#each genreNames as genreNames, i (i)}
          {genreNames}{"  "}
        {/each}
      </p>
    {/if}
    <p class="overview">{overview}</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    padding: 15px 30px 15px 20px;
    margin: 15px;
    border-radius: 0.8rem 0.8rem 0.8rem 0;
    border: 1px solid var(--greyBorder);
    overflow: hidden;
  }

  .posterContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .posterContainer::after {
    content: "";
    background-color: var(--primaryColor);
    width: 500px;
    height: 240px;
    position: absolute;
    top: -210px;
    z-index: -100;
    -webkit-transform: skewY(-30deg);
    -moz-transform: skewY(-30deg);
    -o-transform: skewY(-30deg);
    -ms-transform: skewY(-30deg);
    transform: skewY(-30deg);
  }

  .poster {
    max-height: 260px;
  }

  .noPoster {
    height: 260px;
    width: 170px;
    background-color: var(--greyBorder);
  }

  .noPoster p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    font-weight: 700;
    color: rgb(170, 170, 170);
    font-family: "Roboto Condensed", sans-serif;
  }

  .infoContainer {
    margin-left: 30px;
    width: 100%;
  }

  .infoDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .infoDetails p,
  .genres {
    font-size: 0.9rem;
    line-height: 1rem;
    font-weight: 700;
    font-family: "Roboto Condensed", sans-serif;
    height: fit-content;
    color: #636363;
  }

  .vote {
    background-color: #fdc62e;
    font-weight: 700;
    color: #1a2a34;
    font-size: 0.9rem;
    padding: 1px 5px;
    border-radius: 2rem;
  }

  h3 {
    text-align: center;
  }

  .overview {
    font-size: 0.9rem;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 18px;
    max-height: 90px;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 720px) {
    .container {
      padding: 0px 15px 5px 15px;
    }

    h3 {
      font-size: 1rem;
    }

    .poster,
    .noPoster {
      max-height: 150px;
    }

    .noPoster {
      width: 100px;
    }

    .infoContainer {
      margin-left: 15px;
    }

    .infoDetails p,
    .genres {
      margin: 5px 0px;
      font-size: 0.8rem;
    }

    .overview {
      font-size: 0.7rem;
    }
  }

  @media (min-width: 721px) and (max-width: 1200px) {
    .container {
      padding: 0px 25px 5px 25px;
    }

    .poster,
    .noPoster {
      max-height: 150px;
    }

    .noPoster {
      width: 100px;
    }

    .overview {
      font-size: 0.8rem;
    }
  }
</style>
