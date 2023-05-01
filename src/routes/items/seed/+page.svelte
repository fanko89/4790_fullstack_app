<script>
	import { onMount } from 'svelte'
	import { DataStore, Predicates } from 'aws-amplify'
	import { Product } from '../../../models'
	
	export let data;
	
	let products = []
	let selectedProducts = []
	$: allSelected = selectedProducts.length === products.length
	// $: console.log(selectedProducts)

	

		
	const toggleAll = () => {
	  if (allSelected) {
		selectedProducts = [] // uncheck all
	  } else {
		selectedProducts = products.map((product) => product)
	  }
	};

	onMount(async () => {
	  if (!data) return
	  const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?action=process&sort_by=unique_scans_n&json=true&page_size=120`)
  
	  let productObject = await response.json()
	//   console.log(productObject)
	  products = productObject.products
	//   console.log(products)
	});



	
	const findOrCreateProduct = async () => {
  for (let product of selectedProducts) {
		//const foundProduct = await DataStore.query(Product, (c) => c.sourcedId('eq', product.id))
    const foundProduct = await DataStore.query(Product, (c) => c.sourceId.eq(product.id))
    if (foundProduct.length > 0) {
      console.log('Product found already in DataStore')
    } else {
      console.log('Product was not found in DataStore, adding it now')
      await DataStore.save(
		new Product({
        product_name: product.product_name || 'N/A',
       sourceId: product.id || 'N/A',
        brand: product.brands || 'N/A',
        calories: product.nutriments.energy_value || 'N/A',
        carbohydrates: product.nutriments.carbohydrates || 'N/A',
        protein: product.nutriments.proteins || 'N/A',
        fat: product.nutriments.fat || 'N/A',
      }))
    }
  }
}
	const addProductsDataStore = async () => {
  for (let product of selectedProducts) {
    const foundProduct = products.find((item) => item.id === product.id);
    if (foundProduct) {
      const sourceId = foundProduct.id || 'default-id';
      await DataStore.save(
        new Product({
          product_name: foundProduct.product_name,
          sourceId: foundProduct.id,
			brand: foundProduct.brands,
        })
      );
    }
  }
};

const deleteSelectedProducts = async () => {
	  for (let product of selectedProducts) {
		const productToDelete = await DataStore.query(Product, c => c.product_name.eq(product.product_name))
		console.log(productToDelete)
			if (productToDelete.length === 0) {
				console.log('product not found in DataStore')
				return
			} else {
				console.log('product found in DataStore')
				await DataStore.delete(productToDelete[0]) // delete the first item in the array
			}
		}
	}




	
	const deleteAllProducts = async () => {
		try {
	  await DataStore.delete(Product, Predicates.ALL)
	} catch (error) {
	  console.log('error');
	}
}
  </script>
  
  <div>
	<button class="btn btn-primary m-2" class:btn-disabled="{selectedProducts.length === 0}" on:click={findOrCreateProduct}>Add Selected Items to DataStore</button>
	<button class="btn btn-primary m-2" class:btn-disabled="{selectedProducts.length === 0}" on:click={deleteSelectedProducts}>Delete Selected Items</button>
	<button class="btn btn-primary m-2" on:click={deleteAllProducts}>Delete all Items</button>
  </div>
  
  {#if products.length > 0}
  <table class="table w-full overflow-y-auto">
	<thead>
	  <tr>
		<th>
		  <label>
			<input type="checkbox" bind:checked={allSelected} on:change={toggleAll} /> Select All ({selectedProducts.length}
			/ {products.length})</label>
		</th>
		<th class="text-left">Product</th>
		<th class="text-left">Brand</th>
		 <th class="text-left">Calories</th>
		<th class="text-left">Carbohydrates</th>
		<th class="text-left">Protein</th>
		<th class="text-left">Fat</th>
		<th class="text-left">Id</th>

	  </tr>
	</thead>
	<tbody>
	  {#each products as product}
	  <tr>
			
		  <td><input type="checkbox" bind:group={selectedProducts} value={product} /></td>
		  <td>{product.product_name}</td>
		  <td>{product.brands}</td>
		   <td>{product.nutriments.energy_value}</td>
		  <td>{product.nutriments.carbohydrates}</td>
		  <td>{product.nutriments.proteins}</td>
		  <td>{product.nutriments.fat}</td>
		  <td>{product.id}</td>


		</tr>
		{:else}
		<h3>0 products found</h3>
	  {/each}
	</tbody>
  </table>
  {:else}
  <p>Loading products...</p>
  {/if}



<!-- 
	//OAUTH SETUP EXAMPLE
	<script>
	import { onMount } from 'svelte'
	import { DataStore, Predicates } from 'aws-amplify'
	import { Skill } from '../../models'
	export let data
	let items = []
	let selecteditems = []
	$: allSelected = selecteditems.length === items.length
	$: console.log(selecteditems)
	const toggleAll = () => {
		if (allSelected) {
			selecteditems = [] // uncheck all
		} else {
			selecteditems = items.map((skill) => skill)
		}
	}
	onMount(async () => {
		if (!data) return
		const params = new URLSearchParams()
		params.append('limit', 1000)
		//params.append('q', 'javascript')
		const response = await fetch(
			`https://emsiservices.com/items/versions/latest/items?${params}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${data.access_token}`
				}
			}
		)
		let itemsObject = await response.json()
		//console.log(itemsObject)
		items = itemsObject.data
	})
	/* const additemsToDataStore = async () => {
		for (let skill of selecteditems) {
			const foundSkill = items.find((item) => item.id === skill)
			//console.log(foundSkill)
			await DataStore.save(
				new Skill({
					name: foundSkill.name,
					sourcedId: foundSkill.id
				})
			)
		}
	} */
	const findOrCreateSkill = async () => {
		for (let skill of selecteditems) {
			//const foundSkill = await DataStore.query(Skill, (c) => c.sourcedId('eq', skill.id))
			const foundSkill = await DataStore.query(Skill, (c) => c.sourcedId.eq(skill.id))
			if (foundSkill.length > 0) {
				console.log('skill found already in DataStore')
			} else {
				console.log('skill was not found in DataStore, adding it now')
				await DataStore.save(
					new Skill({
						name: skill.name,
						sourcedId: skill.id,
					})
				)
			}
		}
	}
	const deleteSelecteditems = async () => {
		for (let skill of selecteditems) {
			const skillToDelete = await DataStore.query(Skill, c => c.sourcedId.eq(skill.id))
			console.log(skillToDelete)
			await DataStore.delete(skillToDelete[0]) // delete the first item in the array
		}
	}
	const deleteAllitems = async () => {
		await DataStore.delete(Skill, Predicates.ALL)
	}
</script>

<div>
	<button class="btn btn-primary m-2" class:btn-disabled="{selecteditems.length === 0}" on:click={findOrCreateSkill}>Add Selected Items to DataStore</button>
	<button class="btn btn-primary m-2" class:btn-disabled="{selecteditems.length === 0}" on:click={deleteSelecteditems}>Delete Selected Items</button>
	<button class="btn btn-primary m-2" on:click={deleteAllitems}>Delete all Items</button>
</div>
<table class="table w-full overflow-y-auto">
	<thead>
		<tr>
			<th>
				<label>
					<input type="checkbox" checked={allSelected} on:change={toggleAll} /> Select All ({selecteditems.length}
					/ {items.length})</label>
			</th>
			<th class="text-left">Skill</th>
			<th class="text-left">Id</th>
		</tr>
	</thead>
	<tbody>
		{#each items as skill}
			<tr>
				<td><input type="checkbox" bind:group={selecteditems} value={skill} /></td>
				<td>{skill.name}</td>
				<td>{skill.id}</td>
			</tr>
		{/each}
	</tbody>
</table> -->
