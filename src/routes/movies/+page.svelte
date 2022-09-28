<script>
export let data;
//reactive statement
//$:console.log(data.movies.Search[0]);
//reactive variable     
//let firstMovie = data.movies.Search[0]   
</script>

<main class="flex flex-wrap justify-center">
  {#each data.movies as movie}
    <div class="card w-96 bg-base-100 shadow-xl m-3">
        <figure><img src={movie.Poster} alt="moive poster"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{movie.Title}</h2>
          <p>{movie.Year}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
{/each}
</main>

<style>

</style>