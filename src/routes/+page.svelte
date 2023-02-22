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
    goto('/src/routes/auth/login')
  }
</script>


<div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">Welcome! Take a look at my DGM 3790 SvelteKit Project</p>
        <button class="btn btn-primary" on:click="{navigate}">click here</button>
      </div>
    </div>
  </div>