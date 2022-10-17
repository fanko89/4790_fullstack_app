// import { NASA_APIKEY } from '$env/static/private'
// export async function load() { 
//     try {
//         const nasa_response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_APIKEY}`)
//         const nasaData = await nasa_response.json()
//         console.log(nasaData)
//         return nasaData
//     } catch (err) {
//         console.error(err)
//     }
// }

//https://finnhub.io/api/v1/calendar/ipo?from=2020-01-01&to=2020-04-30&token=cd6dpb2ad3i9oigm61r0cd6dpb2ad3i9oigm61rg


import { FINNHUB_APIKEY } from '$env/static/private'
export async function load() { 
    try {

       
        const finnhub_response = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${FINNHUB_APIKEY}`)
        const finnhubData = await finnhub_response.json()
        console.log(finnhubData)
        return finnhubData
    } catch (err) {
        console.error(err)
    }
}


