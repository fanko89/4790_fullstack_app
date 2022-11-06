<script>
	import { onMount } from 'svelte'
	import ImageLoader from '../../lib/components/Image/ImageLoader.svelte'

	let allPokemon = []

	onMount(async () => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1200`)
		const pokeData = await response.json()

		allPokemon = pokeData.results.map(pokemon => {
			pokemon.id = pokemon.url.slice(34, pokemon.url.lastIndexOf('/'))
			return pokemon
		})
	})
</script>

<h1 class="text-xl">Pokemon Grid</h1>

<div class="w-full grid grid-cols-6 gap-2 p-2">
	{#each allPokemon as pokemon}
		<figure>
			<ImageLoader src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`} alt={pokemon.name}></ImageLoader>
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	{:else}
		<p>Loading...</p>
	{/each}
</div>