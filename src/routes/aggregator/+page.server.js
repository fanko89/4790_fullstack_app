import {NEWS_APIKEY} from '$env/static/private'
import {error} from '@sveltejs/kit'



export async function load() {
    try {
        const news_response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
        const news4Data = await news_response.json()
        const allTopStories = await getAllTopStories(news4Data)
        return {topStories: allTopStories}
    } catch (err){
        throw error(404, 'nothing found')
    }
}

async function getAllTopStories(topStoryIDArray) {
   // let topStories = []
/*     //console.log(pageOne)
    const totalResults = parseInt(pageOne.totalResults)
    if (totalResults === 0 ) return
    if (totalResults > 0 && totalResults < 11) {
        return pageOne.Search // return just the array of the results
    }
    allTheMovies = [...pageOne.Search]
    // how many times to loop
    let counter = Math.ceil(totalResults / 10) //rounding up from 1.5 to 2 with math  */
 const topStories = topStoryIDArray.map(async (element, index) => {
    console.log(element, index)
    if (index <= 9){
    try {
        const response = await fetch(` https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`)
     const article = response.json()
       console.log(JSON.stringify(article))

        
   
    } catch (err){
        throw error(404, 'nothing found')
    }

}
 }) 
return topStories
} 