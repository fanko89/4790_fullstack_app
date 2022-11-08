<script>
	import { enhance } from '$app/forms'
	//import { goto } from '$app/navigation'

	//making an object for the login
    const credentials = {
        email: '',
        password: ''
    }
	
	//function navigate() {
	//	goto('/dashboard')
	//}

</script>

<div class="hero min-h-screen bg-base-400">
	<div class="hero-content text-center">
		<div class="card shadow-lg bg-slate-600">
			<form class="card-body" method="POST" action="?/login" use:enhance>
				<div class="form-control">
                    <h1 class="text-5xl font-bold m-4 text-primary-content">Log in</h1>
                   
                    <label class="label text-white" for="email">Email Address</label>
					<input
						class="input input-bordered input-lg w-95 bg-white"
						type="email"
						name="email"
						placeholder="Email"
                        required
                        autocomplete="email"
                        bind:value={credentials.email}
					/>
                    <label class="label text-white" for="password">Password</label>
                    <input class="input input-bordered input-lg w-96 bg-white" type="password" name="password" placeholder="Password" required autocomplete="password" minlength="8" maxlength="70" bind:value={credentials.password}/>
                    <button class="btn btn-secondary btn-lg mt-8 text-white" type="submit">Log In</button>
				</div>
			</form>
		</div>
	</div>
</div>