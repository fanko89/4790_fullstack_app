export async function load() { 
    try {

        const fruit_response = await fetch(`http://www.fruityvice.com/api/fruit/genus/:genus`)
        const fruitData = await fruit_response.json()
        return {
            body: fruitData
          }
        }
        catch (err) {
        console.error(err)
        
    }
  
}

	

// onMount(async () => {
//     const response = await fetch(`https://www.fruityvice.com/api/fruit/all&count=20`)
//     const fruitData = await response.json()
//     console.log(fruitData)
//     allFruit = fruitData.all

    
    //a way to change url from api images (not used in my project but here for reference)
    // allDrinks = drinkData.drinks.map(drink => {
    // 			drink.id= drink.url.slice(34, drink.url.lastIndexof('/'))
    // 			return drink
    // })


// export async function load({ fetch }) {
//   const response = await fetch('https://www.fruityvice.com/api/fruit/all');
//   if (!response.ok) {
//     throw new Error('Error retrieving fruits data');
//   }
//   const { data } = await response.json();
//   const fruits = data.slice(0, 100);
//   return {
//     props: { fruits }
//   };

//     try {
//         const response = await fetch('https://www.fruityvice.com/api/fruit/all', {
//             method: 'POST',
//             body: params
//         })
//         const data = await response.json()
//         console.log(data)
//         lightcastToken = data
//         return data
//     } catch (error) {
//         console.log(error)
//     }

// }

// }






// // OAUTH SETUP EXAMPLE

// import { SKILLS_CLIENT, SKILLS_SECRET } from '$env/static/private'

// let lightcastToken = null
// let serverStartTime = new Date()

// export async function load() {
//     if (lightcastToken) {
//         // check if token is expired
//         const { expires_in } = lightcastToken
//         const expires = new Date(serverStartTime.getTime() + (expires_in * 1000))
//         console.log('Token expires at', expires)
//         const seconds = (expires - new Date()) / 1000
//         if (seconds > 0) {
//             console.log('Token still valid, returning it')
//             return lightcastToken
//         } else {
//             console.log('Token expired, getting a new one...')
//             return await getToken()
//         }
//     } else {
//         console.log('No token, getting one...')
//         return await getToken()
//     }
// }

// async function getToken() {
//     const params = new URLSearchParams()
//     params.append('grant_type', 'client_credentials')
//     params.append('client_id', SKILLS_CLIENT)
//     params.append('client_secret', SKILLS_SECRET)
//     params.append('scope', 'emsi_open')

//     try {
//         const response = await fetch('https://auth.emsicloud.com/connect/token', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//             body: params
//         })
//         const data = await response.json()
//         console.log(data)
//         lightcastToken = data
//         return data
//     } catch (error) {
//         console.log(error)
//     }
