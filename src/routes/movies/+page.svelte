<script>
export let form, errors
//reactive statement
//$:console.log(form);
//reactive variable     
//let firstMovie = data.movies.Search[0]
   
</script>

{#if errors?.title}
<p class="error">{errors.title}</p>
{/if}

<main class="flex flex-wrap justify-center">
  {#if !form}
  <div class="card">
    <div class="card-body">
      <img src="/images/stop.png" alt="stop sign"/>
      <h2 class="text-5x1 font-bold text-center">No moive. Please enter an valid title is search box</h2>
    </div>
    </div>
    {:else}
 {#each form as movie}
    <div class="card w-96 bg-base-100 shadow-xl m-4">
      <figure>
        <figure><img src={movie.Poster} alt="moive poster"/>
        </figure>
        <div class="card-body">
         <h2 class="card-title">{movie.Title}</h2>
          <p>{movie.Year}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">more details</button>
          </div>
        </div>
      </div>
{/each}
{/if}
</main>