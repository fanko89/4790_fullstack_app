<!-- <script>
    import { onMount } from 'svelte'
    export let data
    let fruits = []
    onMount(async () => {
        if (!data) return
        const params = new URLSearchParams()
        params.append('limit', 100)
        params.append('q', 'javascript')
        const response = await fetch(`http://www.fruityvice.com/api/fruit/${params}`)
        let fruitsObject = await response.json()
        console.log(fruitsObject)
        fruits = fruitsObject.data
    })
</script>

<table class="table w-full overflow-y-auto">
    <thead>
        <tr>
            <th class="text-left">fruit</th>
            <th class="text-left">id</th>
            <th class="text-left">family</th>      
        </thead>
    <tbody>
        {#each fruits as fruit}
            <tr>
                <td>{fruit.name}</td>
                <td>{fruit.id}</td>
            </tr>
        {/each}
        </tbody>
    </table> -->