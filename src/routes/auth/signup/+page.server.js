import { invalid, redirect } from '@sveltejs/kit'
//import store

/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({ request }) => {
        // login the user in
        const data = await request.formData()
        const email = data.get('email')
        // eslint-disable-next-line no-unused-vars
        const password = data.get('password')
        const name = data.get('name')
        const address = data.get('address')
        
        if (!email) { //why is this not working 
            return invalid(400, {email, missing: true})
        }
        
		throw redirect(303, '/auth/login');
		
    }
    signup:async ({ request }) => {
        const data= await request.formData()
        const newUser = {
            firstName
            email: data.get('email'),
        }

    }
}