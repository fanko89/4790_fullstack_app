
// export async function load() {
//   try {
//     const response = await fetch('https://world.openfoodfacts.org/brands.json', {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     const data = await response.json();
//     const products = [{ id: data.code, name: data.name, url: data.url }];

//     const savedProducts = await DataStore.query(Product);
//     await Promise.all(products.map(async (product) => {
//       const existingProduct = savedProducts.find(p => p.id === product.id);
//       if (!existingProduct) {
//         await DataStore.save(new Product(product));
//       }
//     }));

//     const newProducts = await DataStore.query(Product);

//     return {
//       props: {
//         products: newProducts,
//         Product
//       }
//     };
//   } catch (error) {
//     console.log(error);
//     return { status: 500 };
//   }
// }







// // // OAUTH SETUP EXAMPLE

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
