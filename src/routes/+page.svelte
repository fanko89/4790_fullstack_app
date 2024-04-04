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
  import { Auth } from 'aws-amplify';
  import { localUser } from '$lib/stores/localUser'
  


  function navigate() {
    goto('/auth/login')
  }
  const credentials = {
	  email: 'crowntheundecided@gmail.com',
	  password: 'Guest123!'
	};



  
  const handleGuestSignIn = async () => {
    try {
      // Sign in as a guest with predefined guest credentials
      const user = await Auth.signIn(credentials.email, credentials.password); // Replace with actual guest credentials
      console.log('Guest login successful:', user);
      goto('/dashboard'); // Redirect to the dashboard or guest-accessible page
    } catch (errorObj) {
      console.error('Guest login error:', errorObj);
      formError.errorMessage = errorObj.message;
      if (errorObj.code === 'NotAuthorizedException') {
        formError.wrongPass = true;
      }
    }
  };

</script>

<div class="hero min-h-screen" style="background-color: black; background-size: cover; background-position: center;">
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md mx-auto">
      <h1 class="mb-5 text-5xl font-bold">Hello</h1>
      <p class="mb-5 text-lg font-medium">Welcome! This project showcases my Svelte framework integrated with Amplify AWS</p>
      <button class="btn btn-wide btn-secondary mb-10" on:click="{navigate}">Login</button>
        <!-- Login as Guest -->
        <form on:submit|preventDefault={handleGuestSignIn}>
        <button class="btn btn-wide btn-secondary" on:click={{handleGuestSignIn}}>Login as Guest</button>
        </form>
      <!-- <div class="flex justify-center items-center gap-4">
        <a href="#" class="icon-btn text-2xl"><i class="fab fa-facebook"></i></a>
        <a href="#" class="icon-btn text-2xl"><i class="fab fa-twitter"></i></a>
        <a href="#" class="icon-btn text-2xl"><i class="fab fa-instagram"></i></a>
      </div> -->
    </div>
  </div>
</div>


