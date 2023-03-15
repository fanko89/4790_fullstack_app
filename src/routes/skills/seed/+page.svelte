<script>
	import { onMount } from 'svelte'


export let data
let fruits = []
  
	onMount(async () => {
	  if (!data)  return
	  const response = await fetch('http://www.fruityvice.com/api/fruit/:nutrition?min=0&max=1000')
	  let fruitObject = await response.json()
		console.log(fruitObject)
		fruits = fruitObject.data
	//   else {
	// 	const { props } = await load({ page: 'index' });
	// 	fruits = props.body;
	//   }
	});
  </script>
  
  <table class="table w-full overflow-y-auto">
	<thead>
	  <tr>
		<th class="text-left">Fruit</th>
		<th class="text-left">id</th>
		<th class="text-left">family</th>
	  </tr>
	</thead>
	<tbody>
	  {#each fruits as fruit}
	  <tr>
		<td>{fruit.name}</td>
		<td>{fruit.id}</td>
		<td>{fruit.family}</td>
	  </tr>
	  {/each}
	</tbody>
  </table>

  
  
  


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