<script>
	import { onMount } from 'svelte'
	// import Image from '../../lib/components/Image/Image.svelte'
	// import ImageLoader from '../../lib/components/Image/ImageLoader.svelte'

 let allDrinks = []
	

	onMount(async () => {
		const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
		const drinkData = await response.json()
		console.log(drinkData)
		allDrinks = drinkData.drinks

		// allDrinks = drinkData.results.map(drink => {
		// 	drink.id = drink.url.slice(34, drink.url.lastIndexOf('/'))
		// 	return drink
		// })

	})
</script>

<h1 class="text-xl">Drink Grid</h1>

<div class="w-full grid grid-cols-6 gap-2 p-2">
	{#each allDrinks as drink}
		<figure>
			<!-- -->
			<img src={`${drink.strDrinkThumb}`} alt={drink.strDrink}/>
			<figcaption>
			<h1 class="text-5x1 font-bold ">Drink Name:</h1>
			<p>{drink.strDrink}</p>
		</figcaption>
		</figure>
	{:else}
		<p>Loading...</p>
	{/each}
</div> 

