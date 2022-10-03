import { NEWS_APIKEY } from '$env/static/private'
//https:api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=YOUR_API_TOKEN

export async function load() {
    try {
        const news_response = await fetch(`https:api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=${NEWS_APIKEY}`)
        const newsData = await news_response.json()
        console.log(newsData)
    } catch (err){
        console.error(err)
    }
    return {
        foo: 'bar'
    }
}