//import { NEWS_APIKEY } from '$lib/server/secrets.js'
import { error } from '@sveltejs/kit'

//https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=YOUR_API_TOKEN

export async function load() {
    try {
        const news_response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
        const news_data = await news_response.json()
        const allTopStories = await getAllTopStories(news_data)
        return { topStories: allTopStories }
    } catch (err) {
        throw error(404, 'Not found')
    }
}

async function getAllTopStories(topStoryIDArray) {
    let topStories = []
    /*     // console.log(pageOne)
        const totalResults = parseInt(pageOne.totalResults)
        //console.log(totalResults)
        if(totalResults === 0) return // should probably let user know "No results"
        if (totalResults > 0 && totalResults < 11) {
            return pageOne.Search // return just the array of the results
        }
        allTheMovies = [...pageOne.Search]
        // figure out how many times to loop
        let counter = Math.ceil(totalResults / 10) */
    const firstTen = topStoryIDArray.slice(0, 30)
    for (const element of firstTen) {
        //console.log(element, index)
        try {
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`)
            const article = await response.json()
            topStories.push(article)
        }
        catch (err) {
            console.error(err)
        }
    }
    return topStories
}