
<script>
	import Header from '../../lib/components/header/Header.svelte';
	import { theme } from '$lib/stores/theme'
</script>
	<div data-theme={$theme} class="h-screen">
<Header />

<slot />
</div>


 

