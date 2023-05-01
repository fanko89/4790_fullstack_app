<!--http://localhost:5000/
    npm i daisyui           installed in dependancies in package.json
    npm i -D tailwindcss postcss autoprefixer    -D means putting it in devDependancies in package.json
    npx tailwindcss init
    npx tailwindcss -i ./src/app.css -o ./dist/output.css --watch
    npm i svelte-chartjs chart.js
    npm install --save-dev @faker-js/faker
    npm install sanitize-html
    npm run dev                 see localhost on browser
-->

<script>
  import { goto } from '$app/navigation'


  function navigate() {
    goto('/auth/login')
  }
</script>

<div class="hero min-h-screen" style="background-image: url(/images/van.JPG); background-size: cover; background-position: center;">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md mx-auto">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5 text-lg font-medium">Welcome! This is my DGM 3790 SvelteKit Project</p>
      <button class="btn btn-wide btn-secondary mb-10" on:click="{navigate}">Login</button>
      <div class="flex justify-center items-center gap-4">
        <a href="#" class="icon-btn text-2xl"><i class="fab fa-facebook"></i></a>
        <a href="#" class="icon-btn text-2xl"><i class="fab fa-twitter"></i></a>
        <a href="#" class="icon-btn text-2xl"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</div>


