<!-- <script>
    export let data
    $: console.log(Object.values(data))
</script>


<div class="min-h-screen flex flex-wrap">
    <progress class="progress progress-primary w-56" value="0" max="100"></progress>
    <div class="hero-content text-center">
        <h1 class="text-4xl font-bold">Example dashboard</h1>
       {#each data as pic}
       <img src={data.logo} alt="NASDAQ company logos">
       {/each}
    </div>
</div>
 -->

<script>
//   import { LayerCake, Svg } from 'layercake';
//   import { scaleBand } from 'd3-scale';

//   import Bar from '../../lib/components/graphs/Bar.svelte';
//   import AxisX from '../../lib/components/graphs/AxisX.svelte';
//   import AxisY from '../../lib/components/graphs/AxisY.svelte';



//   const xKey = 'value';
//   const yKey = 'year';

//   data.forEach(d => {
//     d[xKey] = +d[xKey];
//   });

	import { Line, Doughnut } from 'svelte-chartjs'
	import 'chart.js/auto'
 	import { chartData } from '../../lib/components/graphs/chartData.js'
	import { donutData } from '../../lib/components/graphs/donutData.js'
	import Stats from '../../lib/components//graphs/Stats.svelte'
	import {tweened} from 'svelte/motion'
	import { cubicOut} from 'svelte/easing'


	export let data
	export const prerender = true;
	// $: console.log(Object.values(data))
	let pics = Object.values(data.recipes[0].image);
let name= "Health Score"
	const progress= tweened(data.recipes[0].healthScore
, {
		duration: 400,
		easing: cubicOut
	})

	let finalProgress= 0


const handleClick= async () => {
	await progress.set(Number.parseInt(data.recipes[0].weightWatcherSmartPoints))
	name = "Weight Watcher Smart Points"
	finalProgress =$progress
}
	let showModal = false

function toggleModal() {
  showModal = !showModal
}

	
</script>

<div class="flex flex-wrap justify-center bg-slate-100">
	<div class="carousel carousel-center p-4 max-h-22 max-w-md m-20 space-x-2 bg-neutral rounded-box">
	<!-- 	{#each pics as pic} -->
			<div class="carousel-item">
				<div class="modal" class:modal-open={showModal}>
					<div class="modal-box">
						<h3 class="font-bold text-lg">Apple stock image</h3>
						<p class="py-6">
							This is a link to the {data.name} website <a href="{data.weburl}"><br><br>CLICK HERE!</a>
						</p>
						<div class="modal-action">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<label for="my-modal" class="btn" on:click={toggleModal}>close</label>
						</div>
					</div>
					</div>
					<a href="#" on:click={toggleModal}>
				<img class="rounded-box" src={data.logo} alt="stock markey pic" />
			</a>
			</div>
<!-- 		{/each} -->
	</div>
	<div class="w-96 flex items-center">
	<Line data={chartData} />
	</div>
	<div class="w-96">
	<Doughnut class="p-10" data={donutData} />
	</div>
	<!-- Stats element begins here-->
	<Stats />
	<div>
<progress class="progress progress-info ml-3 w-40" value="{$progress}" max="200" on:click={handleClick}></progress><p class="ml-3">{finalProgress}pt<br>{name}</p><br>
</div>


<!-- <div class="radial-progress" style="--value:{$progress};">{$progress}</div>
<div class="radial-progress" style="--value:{$progressTwo};">{$progressTwo}</div>
<div class="radial-progress" style="--value:{$progressThree};">{$progressThree}</div> -->

	<!-- Mission statement here -->
	<div class="card w-full bg-base-200 shadow-xl m-4">
		<div class="card-body">
			<h2 class="card-title">{data.name} Information</h2>
			<p>
				Our company {data.name} is avalible on the {data.exchange} in the industry of 
				{data.finnhubIndustry} with a share of ${data.shareOutstanding} and a overall capitalization of ${data.marketCapitalization}
			</p>
		</div>
	</div>

</div>
