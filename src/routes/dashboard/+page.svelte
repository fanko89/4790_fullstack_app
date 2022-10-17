<script>
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