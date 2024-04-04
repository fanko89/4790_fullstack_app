<script>
	import '../app.css'
	import { theme } from '$lib/stores/theme'
	import { onMount } from 'svelte'
	import { Product } from '../models'
	import { Amplify, AuthModeStrategyType, DataStore } from 'aws-amplify'
	import awsconfig from '../aws-exports'
	Amplify.configure({
		...awsconfig,
		DataStore: { AuthModeStrategyType: AuthModeStrategyType.MULTI_AUTH }
	})
	onMount(async () => {
		await DataStore.start(Product)
	})
</script>

<div data-theme={$theme}>
	<slot />
	<footer class="footer footer-center p-4 bg-neutral  text-neutral-content ">
		<div class="items-center grid-flow-col">
			<p>Copyright ©  Derek Ney</p>
		</div>
	</footer>
</div>
