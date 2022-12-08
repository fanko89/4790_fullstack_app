<script>
	import { enhance } from '$app/forms'
	import { user } from '$lib/stores/user.js'



	//making an object for the signup
    const credentials = {
        email: '',
		firstName: '',
		lastName: '',
		address: ''
    }

	const storeUserDetails = () => {
		return async ({ update }) => {
			$user = JSON.stringify(credentials)
			update()
		}
	}


</script>

<div class="hero min-h-screen bg-base-400">
	<div class="hero-content text-center">
		<div class="card shadow-lg bg-slate-600">
			<form class="card-body" method="POST" action="/auth?/signup" use:enhance={storeUserDetails}>
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
                    <label class="label text-white" for="password">Password</label>
                    <input class="input input-bordered input-lg w-96 bg-white"
					type="password" 
					name="password" 
					placeholder="Password" 
					required autocomplete="password" 
					minlength="8" 
					maxlength="70" 
					/>

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
</div>