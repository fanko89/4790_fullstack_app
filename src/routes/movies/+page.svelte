<script>
	import { enhance } from '$app/forms'
	import MovieModal from '../../lib/components/MovieModal/MovieModal.svelte'
	export let form, errors
	//$: console.log(form)
	
	let showModal = false
	let movieDetails = {}

	function toggleModal() {
		showModal = !showModal
	}

	const getMovieDetails = () => {
		return async ({ result }) => {
			movieDetails = await result.data
			toggleModal()
		}
	}
</script>

{#if errors?.title}
<p class="error">{errors.title}</p>
{/if}

<main class="flex flex-wrap justify-center">
  <h1 class="text-5xl text-center font-bold py-4">Enter an movie</h1>
  <div class="hero">
 
		<form method="POST" action="/movies?/search" use:enhance>
			<div class="form-control">
        <div class="input-group text-center">
				<input
					class="input input-bordered"
					type="search"
					name="searchTerms"
					placeholder="Search…" />
          <button class="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
			</div>
    </div>
		</form>
  </div>


  {#if !form}
  <div class="card">
    <div class="card-body">
      <img src="/images/stop.png" alt="stop sign" class="m-10"/>
      <h2 class="text-5x1 font-bold text-center">No moive. Please enter an valid title is search box</h2>
    </div>
    </div>
    {:else}
 {#each form as movie}
    <div class="card w-96 bg-base-100 shadow-xl m-4">
      <figure>
        <a href='#'>
          <form method="POST" action="?/details"use:enhance={getMovieDetails}>
           <input type="image" name="movieID" value={movie.imdbID} id="posterMovieID" src={movie.Poster} alt="Submit"/>
          <!-- <img src={movie.Poster} alt="Movie poster" /> -->
        </form>
        </a>
        </figure>
        <div class="card-body">
         <h2 class="card-title">{movie.Title}</h2>
          <p>{movie.Year}</p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
{/each}
{/if}
<MovieModal {movieDetails} {showModal} {toggleModal}/>
</main>