//import {NEWS_APIKEY} from '$env/static/private'
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
    let topStories = []

    const topTen = topStoryIDArray.slice(0, 30)
    for (const element of topTen) {
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