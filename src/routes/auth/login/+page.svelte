
<script>
	import { goto } from '$app/navigation'
	import { Auth } from 'aws-amplify'
    const credentials = {
        email: '',
        password: ''
    }
	// let formError = {
	// 	wrongPass: false,
	// 	errorMessage: ''
	// }
	const handleSubmit = async () => {
		try {
			const user = await Auth.signIn(credentials.email, credentials.password)
			console.log('Login worked...', user)
			goto('/dashboard')
		} catch (err) {
			console.log(err)
			formError.errorMessage = error.message
        // if (error.code === 'UsernameExistsException') {
        //     formError.wrongPass = true
        // }
		}
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="card shadow-xl bg-slate-400">
			<form class="card-body" on:submit|preventDefault={handleSubmit}>
				<div class="form-control">
                    <h1 class="text-4xl font-bold m-4 text-primary-content">Log in</h1>
                    <h4 class="m-2 text-primary-focus">Sign in to my app</h4>

                    <label class="label" for="email">Email Address</label>
					<input
						class="input input-bordered input-lg w-96"
						type="email"
						name="email"
						placeholder="Email"
                        required
                        autocomplete="email"
                        bind:value={credentials.email}
					/>
					<!-- {#if formError.wrongPass}<p class="text-red-800"></p>{/if} -->
                    <label class="label" for="password">Password</label>
                    <input class="input input-bordered input-lg w-96" type="password" name="password" placeholder="Password" required autocomplete="password" minlength="8" maxlength="80" bind:value={credentials.password}/>
                    <button class="btn btn-primary btn-lg m-8" type="submit">Log In</button>
				</div>
				<a href="/auth/signup" class="normal-case text-white text-xl mt-8 mb-3">Sign Up</a>
			</form>
		</div>
	</div>
</div>
