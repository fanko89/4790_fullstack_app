<script>
	import { enhance } from "$app/forms"

    let themeOptions = ['light', 'dark', 'cupcake', 'aqua', 'dracula', 'winter']

function logout() {
    console.log("User logged out")
}
</script>

<header class="navbar bg-base-100">
    <div class="flex-1">
        <a href="/" class="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" stroke-width=".75" stroke="currentColor"> 
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> 
            </svg>
        
        </a>
        <a href="/avatars" class="btn btn-ghost normal-case text-xl">Avatars</a>
        <a href="/movies" class="btn btn-ghost normal-case text-xl">movies</a>
        <a href="/dashboard" class="btn btn-ghost normal-case text-xl">Dashboard</a>
        <a href="/aggregator" class="btn btn-ghost normal-case text-xl">Aggregator</a>

 </div>
<div>
    <form method ="POST" action="/movies" use:enhance>
        <div class="form-control">
            <input class="input input-bordered input-md w-100" type="search" name="searchTerms" placeholder="Movies Search"/>
        </div>
    </form>
 </div>
 <div class="dropdown dropdown-end">

            <select class="select w-full max-x-xs">
                <option>Theme</option>
                {#each themeOptions as theme}
                    <option value={theme}>
                        {theme}
                    </option>
                {/each}
            </select>
    


</div>


</header>