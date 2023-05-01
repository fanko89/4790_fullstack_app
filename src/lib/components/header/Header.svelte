<script>
	import { theme } from '$lib/stores/theme'
	import { Auth, DataStore, Storage } from 'aws-amplify'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { localUser } from '$lib/stores/localUser'
	import ProfilePicModal from '$lib/components/ProfilePicModal/ProfilePicModal.svelte'
  
	let themeOptions = ['light', 'dark', 'cupcake', 'aqua', 'dracula', 'winter']
	let selectedTheme
	let open = false
  
	$: if (selectedTheme && selectedTheme !== 'Theme') $theme = selectedTheme

	let dropdownOpen = false;

function toggleDropdown() {
  dropdownOpen = !dropdownOpen;
}
  
	onMount(async () => {
	  console.log($localUser)
	  Auth.currentAuthenticatedUser()
	  .then(async (user) => {
		console.log('User is authenticated as', user.attributes.email)
		try {
		  const imageFile = await Storage.list('profilePic/', { level: 'protected', pageSize: 1})
		  //console.log(imageFile)
		  const signedURL = await Storage.get(imageFile.results[0].key, { level: 'protected' })
		  //console.log(signedURL)
		  user.attributes.picture = signedURL
		} catch (err) {
		  console.log('It is likely that the user has not yet uploaded a profile pic.', err)
		}
		$localUser = user
	  })
	  .catch((err) => {
		console.log(err)
		$localUser = null
		goto('/auth/login')
	  })
	})
  
	async function logInOut() {
	  if ($localUser) {
		try {
		  await Auth.signOut()
		  //if (DataStore.state === 'Running') await DataStore.clear()
		  await DataStore.clear()
		  $localUser = null
		  goto('/')
		} catch (error) {
		  console.log('error signing out: ', error)
		}
	  } else {
		goto('/auth/login')
	  }
	}
  
	function toggleMenu() {
	  open = !open;
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
        <a href="/movies" class="btn btn-ghost normal-case text-xl">Movies</a>
        <a href="/dashboard" class="btn btn-ghost normal-case text-xl">Meals</a>
        <a href="/aggregator" class="btn btn-ghost normal-case text-xl">Aggregator</a>
        <a href="/drink" class="btn btn-ghost normal-case text-xl">Drinks</a>
		
		{#if $localUser}
		<div class="dropdown dropdown-end">
			<a href="#" class="btn btn-ghost normal-case text-xl dropdown-toggle">
			  GraphQL API
			</a>
			<ul tabindex="0" class="mt-3 p-2 dropdown-content bg-base-100 menu menu-compact shadow rounded-box w-36">
			  <li>
				<a href="/items" class="menu-title btn btn-ghost normal-case text-xl dropdown-toggle">
				  Data
				</a>
			  </li>
			  <li>
				<a href="/items/seed" class="menu-title btn btn-ghost normal-case text-xl dropdown-toggle">
				  Add Data
				</a>
			  </li>
			</ul>
		  </div>
		{/if}
	</div>

	<div class="dropdown dropdown-end">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-label-has-associated-control -->

		<div class="avatar" class:online={$localUser}>
			<div class="bg-neutral-focus text-neutral-content rounded-xl w-24">
				{#if $localUser?.attributes?.picture}
				<img src={$localUser?.attributes?.picture} alt='Profile Pic of User' tabIndex="0"/>
				{:else}
				<label tabindex="0" class="block w-full h-full text-center">{$localUser?.attributes?.name ?? 'Login'}</label>
				{/if}
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul
			tabindex="0"
			class="mt-3 p-2 dropdown-content bg-base-100 menu menu-compact shadow rounded-box w-36">
			{#if $localUser}
				<li>Welcome {$localUser?.attributes?.name}!</li>
			{/if}
			<li><a on:click={() => open = !open}>ProfilePic</a></li>
			<li>
				<select bind:value={selectedTheme} class="select w-full max-x-xs">
					<option disabled selected>Theme</option>
					{#each themeOptions as theme}
						<option value={theme}>
							{theme}
						</option>
					{/each}
				</select>
			</li>
			<li><a on:click={logInOut}>{$localUser ? 'Logout' : 'Login'}</a></li>
		</ul>
	</div>
</header>

<ProfilePicModal isModalOpen={open} imagePath='profilePic/' folderLevel='protected' multipleItems='false'/>