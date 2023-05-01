<script>
	import { Storage } from 'aws-amplify'
	export let isModalOpen
	export let imagePath
	export let folderLevel
	export let multipleItems
	
	let files = []
	async function submitHandler() {
		try {
            const previousPics = await Storage.list(imagePath, { level: folderLevel, pageSize: 1 })
			console.log(previousPics)
			if ( multipleItems === 'false' && previousPics.results.length > 0) {
				await Storage.remove(previousPics.results[0].key, { level: folderLevel })
			}
			await Storage.put(`${imagePath}${files[0].name}`, files[0], {level: folderLevel})
		} catch (err) {
			console.log(err)
		}
		isModalOpen = false
	}
	const closeModal = () => {
		isModalOpen = false
	}
</script>

<div class="modal border-2 shadow-xl p-8" class:modal-open={isModalOpen}>
	<div class="modal-box">
		<div>
			<label class="btn btn-sm btn-circle absolute right-2 top-2 bg-primary" on:click={closeModal}>✕</label>
			<label class="label" for="file-upload">Select a file</label>
			<input
				class="input input-bordered input-lg w-full p-2"
				type="file"
				name="file-upload"
				id="file-upload"
				accept="image/png, image/jpeg, image/jpg"
				required
				bind:files />
		</div>
		{#if files.length > 0}
			<img class="mt-4" src={URL.createObjectURL(files[0])} alt="preview" />
		{/if}
		<div class="form-control">
			<button class="btn btn-primary btn-lg m-8" on:click={submitHandler}>Upload</button>
		</div>
	</div>
</div>