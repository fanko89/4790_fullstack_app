import { Post } from "src/models"
export async function load({ params }) {
    try {
        const posts = await DataStore.query(post)
    
    return  {
        posts

        }
    }
    catch (err) {
        console.log(err)
    }
}