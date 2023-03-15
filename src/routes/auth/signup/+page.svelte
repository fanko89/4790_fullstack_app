<!-- <script>
import { Auth } from 'aws-amplify'
import { localUser } from '$lib/stores/localUser'
    import { goto } from '$app/navigation'
	

	//making an object for the signup
    const credentials = {
        email: '',
		firstName: '',
		lastName: '',
		address: '',
		password: ''
    }

	let formError = {
        emailTaken: false,
        invalidPassword: false,
        errorMessage: ''
    }

	const handleSubmit = async () => {
		console.log('About to submit signup data...')
		try {
        const { user } = await Auth.signUp({
            username: credentials.email,
            password: credentials.password,
            attributes: {
                name: credentials.firstName,          // optional
                family_name: credentials.lastName,   // optional - E.164 number convention
                email: credentials.email, // other custom attributes 
				address: credentials.address
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        })
        console.log(user)
        $localUser = credentials.email
		// go to verification route on success
        goto('/auth/verify')
    } catch (error) {
        console.log('error signing up:', error)
        formError.errorMessage = error.message
        if (error.code === 'UsernameExistsException') {
            formError.emailTaken = true
        }
        if (error.code === 'InvalidPasswordException') {
            formError.invalidPassword = true
        }
    }
	}
</script>

<div class="hero min-h-screen bg-base-400">
	<div class="hero-content text-center">
		<div class="card shadow-lg bg-slate-600">
			<form class="card-body"  on:submit|preventDefault={handleSubmit}>
				<div class="form-control">
                    <h1 class="text-5xl font-bold m-4 text-white">Sign Up</h1>
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
					{#if formError.emailTaken}<p class="text-red-800">{formError.errorMessage}</p>{/if}
                    <label class="label text-white" for="password">Password</label>
                    <input class="input input-bordered input-lg w-96 bg-white"
					type="password" 
					name="password" 
					placeholder="Password" 
					required autocomplete="password" 
					minlength="8" 
					maxlength="70"
					bind:value={credentials.password} 
					/>
					{#if formError.invalidPassword}<p class="text-red-800">{formError.errorMessage}</p>{/if}

					<label class="label text-white" for="firstName">First Name</label>
                    <input class="input input-bordered input-lg w-96 bg-white" 
					type="firstName" 
					name="firstName" 
					placeholder="Your Frist Name" 
					minlength="2"
					maxlength="80"
					required 
					autocomplete="given-name"
					bind:value={credentials.firstName}
					/>

					<label class="label text-white" for="lastName">Last Name</label>
                    <input class="input input-bordered input-lg w-96 bg-white" 
					type="lastName" 
					name="lastName" 
					placeholder="Your Last Name" 
					minlength="2"
					maxlength="80"
					required 
					autocomplete="family-name"
					bind:value={credentials.lastName}
					/>


					<label class="label text-white" for="address">Address</label>
                    <input class="input input-bordered input-lg w-96 bg-white" 
					type="address" 
					name="address"
					placeholder="Address" 
					required 
					autocomplete="address"
					bind:value={credentials.address}
					/>

					<button class="btn btn-secondary btn-lg mt-8 text-white" type="submit">sign up</button>
				</div>
			</form>
		</div>
	</div>
</div> -->