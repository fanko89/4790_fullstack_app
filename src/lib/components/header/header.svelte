<!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" stroke-width=".75" stroke="currentColor"> 
    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> 
</svg>
 -->


 <script>
	import { enhance } from '$app/forms';

	let themeOptions = ['light', 'dark', 'cupcake', 'aqua', 'dracula', 'winter']

	function logout() {
		console.log("User logged out")
	}
</script>

<header class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/>
			</svg>
		</a>
		<a href="/avatars" class="btn btn-ghost normal-case text-xl">Avatars</a>
		<a href="/movies" class="btn btn-ghost normal-case text-xl">Movies</a>
		<a href="/dashboard" class="btn btn-ghost normal-case text-xl">Dashboard</a>
		<a href="/aggregator" class="btn btn-ghost normal-case text-xl">News Aggregator</a>
	</div>
	<div>
		<form method="POST" action="/movies" use:enhance>
			<div class="form-control">
				<input
					class="input input-bordered input-lg w-80"
					type="search"
					name="searchTerms"
					placeholder="Movie Search"
				/>
			</div>
		</form>
	</div>
	<div class="dropdown dropdown-end">
		<label tabindex="0" class="btn btn-ghost btn-circle avatar m-1" for="userIcon">
			<div class="w-16 rounded-full">
				<img id="userIcon" src="https://placeimg.com/90/90/people" alt="User icon" />
			</div>
		</label>
		<ul
			tabindex="0"
			class="mt-3 p-2 dropdown-content bg-base-100 menu menu-compact shadow rounded-box w-36"
		>
			<li><a>Profile</a></li>
			<li><a>Settings</a></li>
			<li>
				<select class="select w-full max-x-xs">
					<option>Theme</option>
					{#each themeOptions as theme}
						<option value={theme}>
							{theme}
						</option>
					{/each}
				</select>
			</li>
			<li><a on:click={logout}>Logout</a></li>
		</ul>
	</div>
</header>