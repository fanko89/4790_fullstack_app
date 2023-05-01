<script>
	import { onMount } from 'svelte'
	import Image from '../../lib/components/Image/Image.svelte'
 //import ImageLoader from '../../lib/components/Image/ImageLoader.svelte'

 let allDrinks = []
	

	onMount(async () => {
		const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
		const drinkData = await response.json()
		// console.log(drinkData)
		allDrinks = drinkData.drinks
// Fetch ingredients for each drink
		for (let i = 0; i < allDrinks.length; i++) {
      const drink = allDrinks[i]
      const ingredientResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
      const ingredientData = await ingredientResponse.json()
      drink.ingredients = []

      for (let j = 1; j <= 15; j++) {
        const ingredient = ingredientData.drinks[0][`strIngredient${j}`]
        if (ingredient) {
          drink.ingredients.push(ingredient)
        }
      }
	}
		
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
			<!-- <h1 class="h-4 text-5xl font-bold">Ingredients:</h1> -->
			<!-- {#each drink.ingredients as ingredient} -->
			<!-- <p>{drink.ingredients}</p> -->
		  <!-- {:else}
			<p>No ingredients found</p>
		  {/each} -->

		</figcaption>
		<br>
		<br>
		</figure>
	
	{:else}
		<p>Loading...Please wait</p>
	{/each}
</div> 

