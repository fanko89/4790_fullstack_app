<script>
export let data
//$: console.log(data)
</script>

<main class="flex flex-wrap justify-center">
    {#each data.allNames as {lastName, avatar} }

    <a  href={`/avatars/${lastName}`} class="box">
    <img src={avatar} alt="avatar"/>
    <h2>{lastName}</h2>
</a>

    {/each}
</main>

<style>
/*main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
*/
.box{
    padding: 0.25rem;
    margin: 1.5rem;
    color: red;
    box-shadow: 4px 5px 11px 2px lightgray;
}
.box:hover {
    box-shadow: 4px 5px 11px 10px lightgray;
}
img {
width: 8rem;
object-fit: contain;
}
</style>
