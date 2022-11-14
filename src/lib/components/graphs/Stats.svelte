<script>
	import { faker } from '@faker-js/faker'

  let showModal = false

  function toggleModal() {
    showModal = !showModal
  }
</script>

<div class="stats shadow-xl m-4">
	<div class="stat">
		<div class="stat-figure text-primary">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-8 h-8 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/></svg
			>
		</div>
		<div class="stat-title">Total Likes</div>
		<div class="stat-value text-primary">{faker.random.numeric(2)}.{faker.random.numeric()}K</div>
		<div class="stat-desc">{faker.random.numeric(2)}% more than last month</div>
	</div>

	<div class="stat">
		<div class="stat-figure text-secondary">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-8 h-8 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/></svg
			>
		</div>
		<div class="stat-title">socks views</div>
		<div class="stat-value text-secondary">2.1k</div>
		<div class="stat-desc">21% last month</div>
	</div>

	<div class="stat">
		<div class="stat-figure text-secondary">
			<div class="avatar online">
				<div class="w-16 rounded-full">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#" on:click={toggleModal}>
						<img src="https://placeimg.com/128/128/people" alt="person" />
					</a>
				</div>
			</div>
		</div>
		<div class="stat-value">26%</div>
		<div class="stat-title">stocks bought</div>
		<div class="stat-desc text-secondary">21 socks remaining</div>
	</div>


	<div class="modal" class:modal-open={showModal}>
		<div class="modal-box">
			<h3 class="font-bold text-lg">Congratulations!</h3>
			<p class="py-4">
				You've won a big gift for free!
			</p>
			<div class="modal-action">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<label for="my-modal" class="btn" on:click={toggleModal}>nice!</label>
			</div>
		</div>
	</div>
</div>