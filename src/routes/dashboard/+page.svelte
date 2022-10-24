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
	import { Line, Doughnut } from 'svelte-chartjs';
	import 'chart.js/auto';
 	import { chartData } from '../../lib/components/chartData.js';
	import { donutData } from '../../lib/components/donutData.js'; 
	import Stats from '../../lib/components/Stats.svelte';


	export let data;
	export const prerender = true;
	// $: console.log(Object.values(data))
	let pics = Object.values(data);

	
</script>

<div class="flex flex-wrap justify-center bg-slate-100">
	<div class="carousel carousel-center p-4 max-h-24 max-w-md m-20 space-x-4 bg-neutral rounded-box">
	<!-- 	{#each pics as pic} -->
			<div class="carousel-item">
				<img class="rounded-box" src={data.logo} alt="stock pic" />
			</div>
<!-- 		{/each} -->
	</div>
	<div class="w-96 flex items-center">
	<Line data={chartData} />
	</div>
	<div class="w-96">
	<Doughnut class="p-16" data={donutData} />
	</div>
	<!-- Stats element begins here-->
	<Stats />
	<!-- Mission statement here -->
	<div class="card w-full bg-base-200 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">{data.name} Information</h2>
			<p>
				Our company {data.name} is avalible on the {data.exchange} in the industry of 
				{data.finnhubIndustry} with a share of ${data.shareOutstanding} and a overall capitalization of ${data.marketCapitalization}
			</p>
		</div>
	</div>

</div>