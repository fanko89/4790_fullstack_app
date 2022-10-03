import {NEWS_APIKEY} from '$env/static/private'
import {error} from '@sveltejs/kit'


export async function load() {
    try {
        const news_response = await fetch(`https:api.thenewsapi.com/v1/news/top?locale=us&language=en&api_token=${NEWS_APIKEY}`)
        const news4Data = await news_response.json()
        return {newsData: news4Data.data}
   
    } catch (err){
        throw error(404, 'nothing found')
    }
}