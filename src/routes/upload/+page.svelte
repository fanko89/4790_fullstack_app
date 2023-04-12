<script>
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { localUser } from '$lib/stores/localUser'
	import { Storage } from 'aws-amplify'
	let files = []
	onMount(async () => {
		if (!localUser) {
			goto('/login')
		}
	})
	async function submitHandler(event) {
		event.preventDefault()
		const fr = new FileReader()
		console.log(files[0])
		fr.readAsArrayBuffer(files[0])
		fr.onload = () => {
			console.log(fr.result)
			Storage.put(files[0].name, fr.result)
				.then((result) => console.log(result))
				.catch((err) => console.log(err))
		}
	}
</script>

<div class="mt-32 ml-32 w-1/4 border-2 shadow-xl p-8">
	<form on:submit={submitHandler}>
		<div class="form-control">
			<label class="label" for="file-upload">Select a file</label>
			<input
				class="input input-bordered input-lg w-96"
				type="file"
				name="file-upload"
				id="file-upload"
				accept="image/png, image/jpeg"
				required
				bind:files />
		</div>
		<div class="form-control">
			<button class="btn btn-primary btn-lg mt-8" type="submit">Upload</button>
		</div>
	</form>
</div>
