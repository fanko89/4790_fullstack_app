import { DataStore } from "aws-amplify"
import { Post } from "../../models"
import { Amplify } from "aws-amplify"
import awsconfig from "../../aws-exports"

Amplify.configure(awsconfig)

export async function load() {
    try {
        const posts = await DataStore.query(Post)
        return { allPosts: posts }
    } catch (err) {
        console.error(err)
    }
}