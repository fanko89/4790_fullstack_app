// import { invalid, redirect } from '@sveltejs/kit'


// /** @type {import('./$types').Actions} */ 
// export const actions = {
//     login: async ({ request }) => {
//         const data = await request.formData()
//         const email = data.get('email')
//         const password = data.get('password')
        
//         if (!email) { 
//             return invalid(400, {email, missing: true})
//         }
//         try {
//             const verifidedUser = await Auth.signin(email, password)

//         }
//         catch(err) {
//             if(err.code) {
//                 return invalid(400, {errorMessage: err.message, invalidLogin: true})
//             }
//         }
        
// 		throw redirect(303, '/dashboard');
		
//     },
//     signup: async ({ request }) => {
//         const data = await request.formData()
//         //connect to online later
//         throw redirect(307, '/auth/login')
        

//     }
// }


import { invalid, redirect } from '@sveltejs/kit'
// import store for user

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        // TODO log the user in
        const data = await request.formData()
        const email = data.get('email')
        // eslint-disable-next-line no-unused-vars
        const password = data.get('password')
        
        if (!email) { // figure out why this isn't working
            return invalid(400, {email, missing: true})
        }
        try {
            const verifidedUser = await Auth.signin(email, password)

        }
        catch(err) {
            if(err.code) {
                return invalid(400, {errorMessage: err.message, invalidLogin: true})
            }
        }
        
		throw redirect(303, '/dashboard');
		
    },
    signup: async ({ request }) => {
        const data = await request.formData()
        // eventually connect with online identity provider
        throw redirect(307, '/auth/login')

    }
}


// import { invalid, redirect } from '@sveltejs/kit'
// // import store for user

// /** @type {import('./$types').Actions} */
// export const actions = {
//     login: async ({ request }) => {
//         // TODO log the user in
//         const data = await request.formData()
//         const email = data.get('email')
//         // eslint-disable-next-line no-unused-vars
//         const password = data.get('password')
        
//         if (!email) { // figure out why this isn't working
//             return invalid(400, {email, missing: true})
//         }
        
// 		throw redirect(303, '/dashboard');
		
//     },
//     signup: async ({ request }) => {
//         const data = await request.formData()
//         // eventually connect with online identity provider
//         throw redirect(307, '/auth/login')

//     }
// }