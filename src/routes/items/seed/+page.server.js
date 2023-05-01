
// export async function load() {
//   try {
//     const response = await fetch('https://world.openfoodfacts.org/api/v2/search?code=3263859883713,8437011606013,6111069000451&fields=code,product_name', {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     const data = await response.json();
//     const products = [{ id: data.code, name: data.name, url: data.url }];

//     const savedProducts = await DataStore.query(Product);
//     await Promise.all(products.map(async (product) => {
//       const existingProduct = savedProducts.find(p => p.id === product.id);
//       if (!existingProduct) {
//         await DataStore.save(new Product(product));
//       }
//     }));

//     const newProducts = await DataStore.query(Product);

//     return {
//       props: {
//         products: newProducts,
//         Product
//       }
//     };
//   } catch (error) {
//     console.log(error);
//     return { status: 500 };
//   }
// }











/* <script>
	import { onMount } from 'svelte'
	import { DataStore, Predicates } from 'aws-amplify'
	import { Skill } from '../../models'
	let items = []
	let selecteditems = []
	let allSynced = false
	$: allSelected = selecteditems.length === items.length
	onMount(async () => {
		//items = await DataStore.query(Skill)
		//console.log(items)
		DataStore.observeQuery(Skill).subscribe((snapshot) => {
			const { items, isSynced } = snapshot
			items = items
			allSynced = isSynced
			console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`)
		})
	})
	const toggleAll = () => {
		if (allSelected) {
			selecteditems = [] // uncheck all
		} else {
			selecteditems = items.map((skill) => skill)
		}
	}
	const deleteSelecteditems = async () => {
		for (let skill of selecteditems) {
			const skillToDelete = await DataStore.query(Skill, (c) => c.sourcedId.eq(skill.id))
			console.log(skillToDelete)
			if (skillToDelete.length === 0) {
				console.log('skill not found in DataStore')
				return
			} else {
				console.log('skill found in DataStore')
				await DataStore.delete(skillToDelete[0]) // delete the first item in the array
			}
		}
	}
	const deleteAllitems = async () => {
		try {
			await DataStore.delete(Skill, Predicates.ALL)
		} catch (error) {
			console.log(error)
		}
	}
</script>

<div>
	<button
		class="btn btn-primary m-2"
		class:btn-disabled={selecteditems.length === 0}
		on:click={deleteSelecteditems}>Delete Selected Items</button>
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
		{#if !allSynced}
			<h3>Loading...</h3>
		{/if}
		{#each items as skill}
			<tr>
				<td><input type="checkbox" bind:group={selecteditems} value={skill} /></td>
				<td>{skill.name}</td>
				<td>{skill.id}</td>
			</tr>
		{:else}
			<h3>0 items found</h3>
		{/each}
	</tbody>
</table> */





// // // OAUTH SETUP EXAMPLE

// import { items_CLIENT, items_SECRET } from '$env/static/private'

// let lightcastToken = null
// let serverStartTime = new Date()

// export async function load() {
//     if (lightcastToken) {
//         // check if token is expired
//         const { expires_in } = lightcastToken
//         const expires = new Date(serverStartTime.getTime() + (expires_in * 1000))
//         console.log('Token expires at', expires)
//         const seconds = (expires - new Date()) / 1000
//         if (seconds > 0) {
//             console.log('Token still valid, returning it')
//             return lightcastToken
//         } else {
//             console.log('Token expired, getting a new one...')
//             return await getToken()
//         }
//     } else {
//         console.log('No token, getting one...')
//         return await getToken()
//     }
// }

// async function getToken() {
//     const params = new URLSearchParams()
//     params.append('grant_type', 'client_credentials')
//     params.append('client_id', items_CLIENT)
//     params.append('client_secret', items_SECRET)
//     params.append('scope', 'emsi_open')

//     try {
//         const response = await fetch('https://auth.emsicloud.com/connect/token', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//             body: params
//         })
//         const data = await response.json()
//         console.log(data)
//         lightcastToken = data
//         return data
//     } catch (error) {
//         console.log(error)
//     }
