<script>
	import { onMount } from 'svelte'
	import Image from '../../lib/components/Image/Image.svelte'
 //import ImageLoader from '../../lib/components/Image/ImageLoader.svelte'

 let allDrinks = []
	

	onMount(async () => {
		const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
		const drinkData = await response.json()
		console.log(drinkData)
		allDrinks = drinkData.drinks

		
		//a way to change url from api images (not used in my project but here for reference)
		// allDrinks = drinkData.drinks.map(drink => {
		// 			drink.id= drink.url.slice(34, drink.url.lastIndexof('/'))
		// 			return drink
		// })
	})
</script>

<h1 class="py-6 text-5xl font-bold">Mix Drink Grid</h1>

<div class="w-full grid grid-cols-4 gap-2 p-2">
	{#each allDrinks as drink}
		<figure>
			<Image src={`${drink.strDrinkThumb}`} alt={drink.strDrink}></Image>
			<figcaption>
			<h1 class=" h-4 text-5x1 font-bold ">Name of drink:</h1>
			<p>{drink.strDrink}</p>
			<h1 class=" h-4 text-5x1 font-bold ">Category:</h1>
			<p>{drink.strCategory}</p>
		</figcaption>
		<br>
		<br>
		</figure>
	
	{:else}
		<p>Loading...Please wait</p>
	{/each}
</div> 

