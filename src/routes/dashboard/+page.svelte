<script>

import sanitizeHtml from "sanitize-html" //changing html to text
	import { Line, Doughnut } from 'svelte-chartjs'
	import 'chart.js/auto'
 	import { chartData } from '../../lib/components/graphs/chartData.js'
	import { donutData } from '../../lib/components/graphs/donutData.js'
	import Stats from '../../lib/components//graphs/Stats.svelte'
	import {tweened} from 'svelte/motion'
	import { cubicOut} from 'svelte/easing'
	import {fly} from 'svelte/transition'
	import { flip } from 'svelte/animate'






	export let data
	export const prerender = true;
	// $: console.log(Object.values(data))
	let pics = Object.values(data.recipes[0].image);
let name= "Health Score"
	const progress= tweened(data.recipes[0].healthScore, {
		duration: 400,
		easing: cubicOut
	})

	

	let finalProgress= data.recipes[0].healthScore
	let visible = true
	let visibleTwo = true
	let visibleThree = true
	let visibleFour = true


const handleClick= async () => {
	await progress.set(Number.parseInt(data.recipes[0].weightWatcherSmartPoints))
	name = "Weight Watcher Smart Points"
	finalProgress =$progress
}
	let showModal = false

function toggleModal() {
  showModal = !showModal
}

let stepList =[]
let uid = 1
let num = 0

const addStep = () => {
	const step ={
		id: num,
		text: data.recipes[0].extendedIngredients[num].name,
		measures: data.recipes[0].extendedIngredients[num].measures.us.amount,
		measuresUnit: data.recipes[0].extendedIngredients[num].measures.us.unitShort,
		num: num++
	}

	stepList =[step, ...stepList]
}
// let text = data.recipes[0].extendedIngredients
// let measures = data.recipes[0].extendedIngredients[num].measures.us.amount
// console.log(text)
// console.log(measures)

</script>

<div class="flex flex-wrap justify-center bg-slate-100">
	<div class="carousel carousel-center p-4 max-h-22 max-w-md m-20 space-x-2 bg-neutral rounded-box" transition:fly="{{x: 400, duration: 2000}}">

			<div class="carousel-item" >
				<div class="modal" class:modal-open={showModal}>
					<div class="modal-box">
						<h3 class="font-bold text-lg">{data.recipes[0].title} image</h3>
						<p class="py-6">
							This is a link to the {data.recipes[0].sourceName} website <a href="{data.recipes[0].sourceUrl}"><br><br>CLICK HERE!</a>
						</p>
						<div class="modal-action">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<label for="my-modal" class="btn" on:click={toggleModal}>close</label>
						</div>
					</div>
					</div>
					<a href="page" on:click={toggleModal}>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img  src={data.recipes[0].image} class="max-w-sm rounded-lg shadow-2xl" alt="meal picture" />
			</a>
			</div>
		
	
	</div>
	

{#if visible}

	<div class="stats shadow-xl mt-20 mb-20" transition:fly="{{x: 300, duration: 2000}}">
		<div class="stat">
		
			<div class="stat-figure text-primary">
			</div>
			<div class="stat-title">Total Time:
			<div class="stat-value text-primary">{data.recipes[0].readyInMinutes}min</div>
		</div>
		<div class="stat-title">Total Servings:
			<div class="stat-value text-primary">{data.recipes[0].servings}</div>
		</div>
		<div class="stat-title">Total likes:
			<div class="stat-value text-primary">{data.recipes[0].aggregateLikes}</div>
		</div>
		</div>
	
		<div class="stat">
			<div class="stat-figure text-primary">
				<div class="mb-8">
					<div class="stat-figure">{name}:</div>
				  <progress class="progress progress-info w-40" value="{$progress}" max="100" on:keypress={handleClick}></progress>
				  <div class=" stat-value text-secondary">{finalProgress}pt</div>
			
				</div>
		
				<div class="stat-figure">Price Per Serving:
					<div class="stat-value text-secondary">.{data.recipes[0].pricePerServing}</div>
				</div>
			</div>
		
		  </div>
		</div>

	  {/if}
	  <div class="stat flex flex-wrap justify-center">
	  <button class="btn bg-primary w-40" on:click={() => (visible = !visible)}>{visible ? 'Hide' : 'Show'} Information</button>
	  <button class="btn bg-primary w-40" on:click={() => (visibleTwo = !visibleTwo)}>{visibleTwo ? 'Hide' : 'Show'} Description</button>
	  <button class="btn bg-primary w-40" on:click={() => (visibleThree = !visibleThree)}>{visibleThree ? 'Hide' : 'Show'} Ingredients</button>
	  <button class="btn bg-primary w-40" on:click={() => (visibleFour = !visibleFour)}>{visibleFour ? 'Hide' : 'Show'} Instructions</button>

	</div>



	<!-- Mission statement here -->
	{#if visibleTwo}
	<div class="card w- bg-base-200 shadow-xl m-4" transition:fly="{{y: 300, duration: 2000}}">
		<div class="card-body">
		
			<h2 class="card-title">{data.recipes[0].title}</h2>
			<p>
			
			{@html data.recipes[0].summary}
			</p>
		
		
			</div>
			</div>
			{/if}
			{#if visibleThree}
	<div class="card w- bg-base-200 shadow-xl m-4" transition:fly="{{y: 300, duration: 2000}}">
		<div class="card-body">
		
			<h2 class="card-title">{data.recipes[0].title} Ingredients</h2>
			
				
					<button class="btn w-60 container mx-auto" on:click={addStep}>ingredient</button>
					<div class="flex flex-wrap">
					{#each stepList as step (step.id)}
			
					<div class="inline ... flex order-last bg-primary rounded-md p-3 m-1 text-white font-semibold" animate:flip="{{duration: 200}}">{step.measures}{step.measuresUnit} {step.text}</div>
				
					{/each}
				  
				</div>
		
		
		
			</div>
			</div>
			{/if}
			{#if visibleFour}
			<div class="card w- bg-base-200 shadow-xl m-4"  transition:fly="{{y: 300, duration: 2000}}">
				<div class="card-body">
		<div>
		<h2 class="card-title mb-3">Instructions</h2>
			<p>
			{@html data.recipes[0].instructions}
			</p>
		</div>
	
		</div>

	
	</div>
	{/if}

	<!-- <div class="w-96 flex items-center">
	<Line data={chartData} />
	</div> -->
	<!-- <div class="w-96">
	<Doughnut class="p-10" data={donutData} />
	</div> -->
	<!-- Stats element begins here-->
	<!-- <Stats /> -->


<!-- <div class="radial-progress" style="--value:{$progress};">{$progress}</div>
<div class="radial-progress" style="--value:{$progressTwo};">{$progressTwo}</div>
<div class="radial-progress" style="--value:{$progressThree};">{$progressThree}</div> -->



</div>
