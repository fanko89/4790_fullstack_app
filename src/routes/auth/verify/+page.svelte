<script>
	import { Auth } from 'aws-amplify'
	import { localUser } from '$lib/stores/localUser'
	import { goto } from '$app/navigation'
	let code
	const handleSubmit = async () => {
		console.log('About to verify code that was sent by email... ', code)
		if ($localUser) {
			try {
				await Auth.confirmSignUp($localUser, code.toString())
				goto('/')
			} catch (error) {
				console.log('error confirming sign up', error)
			}
		} else {
			console.error('No email found')
		}
	}
</script>

<div class="hero min-h-screen bg-base-100">
	<div class="hero-content text-center">
		<div class="card shadow-xl bg-slate-400">
		
			<div>
				<h1 class="text-3xl font-bold pt-2 m-4 text-primary-content">Enter your 4 digit code:</h1>
			</div>
			<form class="mt-8 space-y-6" on:submit|preventDefault={handleSubmit}>
				<div class="-space-y-px rounded-md shadow-sm">
					<div>
				
						<input
							bind:value={code}
							id="verification-code"
							name="code"
							type="number"
							inputmode="numeric"
							pattern="[0-9]{4}"
							title="Verification code should be exactly 6 digits"
							required
							class="input input-bordered input-lg w-96"
							placeholder="Verification code" />
					</div>
					
				</div>
				<div>
					<button
						type="submit"
						class="btn btn-primary btn-lg mt-8">
						Verify
					</button>
				</div>
				<div class="mx-8 pb-8">
				<label class="text-sm text-primary-content font-bold">
					Click <a class="decoration-2 no-underline hover:underline text-lg text-slate-900" href="#"> here </a> 
					verification code sent to your email address:
				</label>
				</div>
			
			</form>
		</div>
	</div>
</div>