import { OMDB_APIKEY } from '$env/static/private'

export const actions =  {
    default: async ({request}) => {
        const data = await request.formData()
        const searchTerms = data.get('searchTerms')
        try {
            const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${searchTerms}`)
            const movieData = await omdb_response.json()
            const allMovies = await getAllMovies(movieData, searchTerms)
            return allMovies
        } catch (err) {
            console.error(err)
        }
    },
        details: async ({ request }) => {
            const data = await request.formData()
            const movieID = data.get('movieID')
            try {
                const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&i=${movieID}`)
                const movieData = await omdb_response.json()
                return movieData
            } catch (err) {
                console.log('Error trying to fetch movie details', err)
            }
        }
    }
    

async function getAllMovies(pageOne, searchTerms) {
    let allTheMovies = []
    //console.log(pageOne)
    const totalResults = parseInt(pageOne.totalResults)
    if (totalResults === 0 ) return
    if (totalResults > 0 && totalResults < 10) {
        return pageOne.Search // return just the array of the results
    }
    allTheMovies = [...pageOne.Search]
    // how many times to loop
    let counter = Math.ceil(totalResults / 10) //rounding up from 1.5 to 2 with math 
    for (let i = 2; i <= counter; i++) {
        try{
            const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${searchTerms}&page=${i}`)
            const pageData = await response.json()
            //console.log(pageData)
            allTheMovies =[...allTheMovies, ...pageData.Search]
        }
        catch (err) {
            console.error(err)
        }
    }
return allTheMovies.filter(movie => (movie.Type === 'movie' && movie.Poster !== 'N/A')) // filter only movies
} 