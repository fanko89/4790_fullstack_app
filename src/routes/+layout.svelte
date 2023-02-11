<script>
	import '../app.css'
	import { theme } from '$lib/stores/theme'
	import { Amplify } from 'aws-amplify'
	import awsconfig from '../aws-exports'
	Amplify.configure(awsconfig)

  
  </script>
<div data-theme={$theme}>
  
  <slot />
  <footer class="footer footer-center p-4 bg-neutral  text-neutral-content ">
    <div class="items-center grid-flow-col">
      <p>Copyright © 2022 - Derek Ney</p>
    </div> 
  </footer>
</div>
