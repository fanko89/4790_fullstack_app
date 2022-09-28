<!--http://localhost:5000/
    npm i daisyui           installed in dependancies in package.json
    npm i -D tailwindcss postcss autoprefixer    -D means putting it in devDependancies in package.json
    npx tailwindcss init
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

    npm run dev  see localhost on browser
-->


<div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hey there</h1>
        <p class="mb-5">Welcome to my DGM 3790 SvelteKit Project!</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>