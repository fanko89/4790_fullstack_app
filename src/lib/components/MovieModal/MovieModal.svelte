<script>
	export let movieDetails, showModal, toggleModal
</script>

<div class="modal" class:modal-open={showModal}>
	<div class="modal-box">
		<h3 class="font-bold text-4xl text-center text-primary">{movieDetails.Title}</h3>

		<p class="py-4 text-base text-gray-900">{movieDetails.Plot}</p>
		<p class="py-2 text-sm text-green-900">Actors: {movieDetails.Actors}</p>
		<p class="py-2 text-sm text-red-900">Director: {movieDetails.Director}</p>
		<h2 class="py-2 text-m text-blue-700">Year: {movieDetails.Year}</h2>
		<p class="text-base text-blue-700">Length: {movieDetails.Runtime}</p>
		<div class="modal-action">
			<label for="my-modal" class="btn btn-primary" on:click={toggleModal} on:keyup={toggleModal}
				>Close</label>
		</div>
	</div>
</div>