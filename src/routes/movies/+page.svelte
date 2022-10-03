<script>
export let data =[];
//reactive statement
//$:console.log(data.movies.Search[0]);
//reactive variable     
//let firstMovie = data.movies.Search[0]   
</script>
{#if errors?.title}
<p class="error">(errors.title}</p>
{/if}

<main class="flex flex-wrap justify-center">
  <!--{if !data.movies.length}
  <div class="card">
    <div class-body>
      <h2 class="card-title">No movies loaded. make sure your movie is a valid title</h2>
    </div>
    </div>
    {/if} -->
 <!-- {#each data.movies as movie} -->
    <div class="card w-96 bg-base-100 shadow-xl m-3">
      <figure>
        <!--<figure><img src={movie.Poster} alt="moive poster"/>-->
        </figure>
        <div class="card-body">
         <!-- <h2 class="card-title">{movie.Title}</h2> -->
          <!-- <p>{movie.Year}</p> -->
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
<!--{/each}-->
</main>