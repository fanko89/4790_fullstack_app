<script>
    import "../app.css";
    import Header from '../lib/components/header/header.svelte'
  </script>
<div data-theme="forest" class="h-screen">
<Header/>
  
  <slot />
  <footer class="footer footer-center p-4 bg-neutral sticky top-[100vh] text-neutral-content">
    <div class="items-center grid-flow-col">
      <p>Copyright © 2022 - Derek Ney</p>
    </div> 
  </footer>
</div>
