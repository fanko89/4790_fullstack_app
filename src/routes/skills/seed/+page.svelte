<script>
	import { onMount } from 'svelte';
	import { DataStore } from '@aws-amplify/datastore';
	import { Product } from '../../../models';
	
	export let data;
	
	let products = [];
	let selectedProducts = [];
	$: allSelected = selectedProducts.length === products.length;
	$: console.log(selectedProducts)

	
	onMount(async () => {
	  if (!data) return;
	  const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?action=process&sort_by=unique_scans_n&json=true&page_size=100`)
  
	  let productObject = await response.json();
	  console.log(productObject)
	  products = productObject.products;
	  console.log(products)
	});

		
	const toggleAll = () => {
	  if (allSelected) {
		selectedProducts = []; // uncheck all
	  } else {
		selectedProducts = products.map((product) => product);
	  }
	};
	
	const findOrCreateProduct = async () => {
	  for (let product of selectedProducts) {
		const foundProduct = await DataStore.query(Product, (c) => c.name('eq', product.product_name));
		if (foundProduct.length > 0) {
		  console.log('Product found already in DataStore');
		} else {
		  console.log('Product was not found in DataStore, adding it now');
		  await DataStore.save(
			new Product({
			  name: product.product_name,
			})
		  );
		}
	  }
	};
	const addProductsDataStore = () => {
		for(let product  of selectedProducts){
		await DataStore.save(
			new Product({
				name: product.product_name,
				sourceId: product.id
			})
		)
		}

	}
	
	const deleteSelectedProducts = async () => {
	  for (let product of selectedProducts) {
		const productToDelete = await DataStore.query(Product, c => c.name.eq(product.product_name));
		console.log(productToDelete);
		await DataStore.delete(productToDelete[0]); // delete the first item in the array
	  }
	};
	
	const deleteAllProducts = async () => {
	  await DataStore.delete(Product);
	};
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
		<!-- <th class="text-left">Brand</th>
		<th class="text-left">Calories</th>
		<th class="text-left">Carbohydrates</th>
		<th class="text-left">Protein</th>
		<th class="text-left">Fat</th> -->
		<th class="text-left">Id</th>

	  </tr>
	</thead>
	<tbody>
	  {#each products as product}
	  <tr>
			
		  <td><input type="checkbox" bind:group={selectedProducts} value={product} /></td>
		  <td>{product.product_name}</td>
		  <!-- <td>{product.brands}</td>
		  <td>{product.nutriments.energy_value}</td>
		  <td>{product.nutriments.carbohydrates}</td>
		  <td>{product.nutriments.proteins}</td>
		  <td>{product.nutriments.fat}</td> -->
		  <td>{product.id}</td>


		</tr>
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
	let skills = []
	let selectedSkills = []
	$: allSelected = selectedSkills.length === skills.length
	$: console.log(selectedSkills)
	const toggleAll = () => {
		if (allSelected) {
			selectedSkills = [] // uncheck all
		} else {
			selectedSkills = skills.map((skill) => skill)
		}
	}
	onMount(async () => {
		if (!data) return
		const params = new URLSearchParams()
		params.append('limit', 1000)
		//params.append('q', 'javascript')
		const response = await fetch(
			`https://emsiservices.com/skills/versions/latest/skills?${params}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${data.access_token}`
				}
			}
		)
		let skillsObject = await response.json()
		//console.log(skillsObject)
		skills = skillsObject.data
	})
	/* const addSkillsToDataStore = async () => {
		for (let skill of selectedSkills) {
			const foundSkill = skills.find((item) => item.id === skill)
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
		for (let skill of selectedSkills) {
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
	const deleteSelectedSkills = async () => {
		for (let skill of selectedSkills) {
			const skillToDelete = await DataStore.query(Skill, c => c.sourcedId.eq(skill.id))
			console.log(skillToDelete)
			await DataStore.delete(skillToDelete[0]) // delete the first item in the array
		}
	}
	const deleteAllSkills = async () => {
		await DataStore.delete(Skill, Predicates.ALL)
	}
</script>

<div>
	<button class="btn btn-primary m-2" class:btn-disabled="{selectedSkills.length === 0}" on:click={findOrCreateSkill}>Add Selected Items to DataStore</button>
	<button class="btn btn-primary m-2" class:btn-disabled="{selectedSkills.length === 0}" on:click={deleteSelectedSkills}>Delete Selected Items</button>
	<button class="btn btn-primary m-2" on:click={deleteAllSkills}>Delete all Items</button>
</div>
<table class="table w-full overflow-y-auto">
	<thead>
		<tr>
			<th>
				<label>
					<input type="checkbox" checked={allSelected} on:change={toggleAll} /> Select All ({selectedSkills.length}
					/ {skills.length})</label>
			</th>
			<th class="text-left">Skill</th>
			<th class="text-left">Id</th>
		</tr>
	</thead>
	<tbody>
		{#each skills as skill}
			<tr>
				<td><input type="checkbox" bind:group={selectedSkills} value={skill} /></td>
				<td>{skill.name}</td>
				<td>{skill.id}</td>
			</tr>
		{/each}
	</tbody>
</table> -->



























<!-- 
  <script>
	import { onMount } from 'svelte'
	import { DataStore, Predicates } from 'aws-amplify'
	import { Product } from '../../../models'
  
	export let products

	
	let selectedProducts = []
	$: allSelected = selectedProducts.length === products.length
	
	const toggleAll = () => {
	  if (allSelected) {
		selectedProducts = [] // uncheck all
	  } else {
		selectedProducts = products.map((product) => product)
	  }
	}
	
	onMount(async () => {
	   if (!data) return;
	  const params = new URLSearchParams()
	  params.append('limit', 100)
	  params.append('q', 'javascript')
	  const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?action=process&sort_by=unique_scans_n&page_size=500&json=true${params}`)
	  const productData = await response.json()
	  const productToAdd = {
		name: productData.product.product_name,
		brand: productData.product.brands,
		category: productData.product.categories,
		image: productData.product.image_front_url,
		calories: productData.product.nutriments.energy_value,
		protein: productData.product.nutriments.proteins,
		carbohydrates: productData.product.nutriments.carbohydrates,
		fat: productData.product.nutriments.fat
	  }
	  
	  await DataStore.save(
		new Product(productToAdd)
	  )
	})
	
	const toggleSelect = (product) => {
	  if (selectedProducts.includes(product.name)) {
		selectedProducts = selectedProducts.filter((name) => name !== product.name)
	  } else {
		selectedProducts = [...selectedProducts, product.name]
	  }
	}
	
	const findOrCreateProduct = async () => {
	  for (let product of selectedProducts) {
		const foundProduct = await DataStore.query(Product, (c) => c.name('eq', product))
		if (foundProduct.length > 0) {
		  console.log('Product found already in DataStore')
		} else {
		  console.log('Product was not found in DataStore, adding it now')
		  await DataStore.save(
			new Product({
			  name: product,
			  brand: "",
			  category: "",
			  image: "",
			  calories: "",
			  protein: "",
			  carbohydrates: "",
			  fat: ""
			})
		  )
		}
	  }
	}
	
	const deleteSelectedProducts = async () => {
	  for (let product of selectedProducts) {
		const productToDelete = await DataStore.query(Product, c => c.name.eq(product))
		console.log(productToDelete)
		await DataStore.delete(productToDelete[0]) // delete the first item in the array
	  }
	}
	
	const deleteAllProducts = async () => {
	  await DataStore.delete(Product, Predicates.ALL)
	}
	
	$: selectedProductIds = selectedProducts.map(product => product.name)
	
</script>
  
<div>
	<button class="btn btn-primary m-2" class:btn-disabled="{selectedProducts.length === 0}" on:click={findOrCreateProduct}>Add Selected Items to DataStore</button>
	<button class="btn btn-primary m-2" class:btn-disabled="{selectedProducts.length === 0}" on:click={deleteSelectedProducts}>Delete Selected Items from DataStore</button>
	<button class="btn btn-danger m-2" class:btn-disabled="{products.length === 0}" on:click={deleteAllProducts}>Delete All Items from DataStore</button>
	<table class="table">
		<thead>
		  <tr>
			<th><input type="checkbox" bind:checked={allSelected} on:change={toggleAll}></th>
			<th>Name</th>
			<th>Brand</th>
			<th>Category</th>
			<th>Image</th>
			<th>Calories</th>
			<th>Protein</th>
			<th>Carbohydrates</th>
			<th>Fat</th>
		  </tr>
		</thead>
		<tbody>
		  {#each products as product}
		  <tr>
			<td><input type="checkbox" bind:checked={selectedProducts.includes(product.name)} on:change={() => toggleSelect(product)}></td>
			<td>{product.name}</td>
			<td>{product.brand}</td>
			<td>{product.category}</td>
			<td><img src={product.image} alt={product.name} style="height:50px;width:50px;"></td>
			<td>{product.calories}</td>
			<td>{product.protein}</td>
			<td>{product.carbohydrates}</td>
			<td>{product.fat}</td>
		  </tr>
		  {:else}
		  <tr>
			<td colspan="9">No products to display.</td>
		  </tr>
		  {/each}
		</tbody>
	  </table>

</div> -->
