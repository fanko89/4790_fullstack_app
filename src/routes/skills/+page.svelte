<script>
	import { onMount } from 'svelte'
	import { Auth, DataStore, Predicates } from 'aws-amplify'
	import { Product } from '../../models'
	import { goto } from '$app/navigation'
	let products = []
	let selectedProducts = []
	let allSynced = false
	$: allSelected = selectedProducts.length === products.length
	
    onMount(async () => {
		try {
			const user = await Auth.currentAuthenticatedUser()
			console.log('User is authenticated...', user.attributes.email)
			DataStore.observeQuery(Product).subscribe((snapshot) => {
			const { items, isSynced } = snapshot
			products = items
			allSynced = isSynced
			console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`)
		})
		} catch (err) {
			console.log('Checking for user... ', err)
			goto('/auth/login')
		}
	})
	const toggleAll = () => {
		if (allSelected) {
			selectedProducts = [] // uncheck all
		} else {
			selectedProducts = products.map((product) => product)
		}
	}
	const deleteSelectedProducts = async () => {
		for (let product of selectedProducts) {
			const productToDelete = await DataStore.query(Product, (c) => c.product_name.eq(product.product_name))
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
	const deleteAllProduct = async () => {
		try {
			await DataStore.delete(Product, Predicates.ALL)
		} catch (error) {
			console.log(error)
		}
	}
</script>

<div>
	<button
		class="btn btn-primary m-2"
		class:btn-disabled={selectedProducts.length === 0}
		on:click={deleteSelectedProducts}>Delete Selected Items</button>
	<button class="btn btn-primary m-2" on:click={deleteAllProduct}>Delete all Items</button>
</div>
<table class="table w-full overflow-y-auto">
	<thead>
		<tr>
			<th>
				<label>
					<input type="checkbox" checked={allSelected} on:change={toggleAll} /> Select All ({selectedProducts.length}
					/ {products.length})</label>
			</th>
			<th class="text-left">Product</th>
			<th class="text-left">Id</th>
		</tr>
	</thead>
	<tbody>
		{#if !allSynced}
			<h3>Loading...</h3>
		{/if}
		{#each products as product}
			<tr>
				<td><input type="checkbox" bind:group={selectedProducts} value={product} /></td>
				<td>{product.product_name}</td>
				<td>{product.id}</td>
			</tr>
		{:else}
			<h3>0 products</h3>
		{/each}
	</tbody>
</table>