<!-- <script>
import { DataStore, Predicates } from 'aws-amplify'
import { Post, PostStatus } from '../../../models'
export let data
let search = ''
const allPosts = data.allPosts
const createPost = async () => {
    await DataStore.save(
        new Post({
            title: 'My third Post - feb 14',
            rating: 5,
            status: PostStatus.ACTIVE
        })
    )
}
const deletePosts = async () => {
    await DataStore.delete(Post, Predicates.ALL)
}
</script>

<div class="w-fit m-4">
<button class="btn" on:click={createPost}>Save Post</button>
<button class="btn" on:click={deletePosts}>Delete All Posts</button>
<div class="my-4">
    <input type="search" placeholder="Search..." bind:value={search} class="input input-bordered input-primary"/>
    </div>
<table class="table w-full">
    <thead>
        <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Status</th>
        <th>Rating</th>
        <th>Content</th>
    </tr>
        </thead>
        <tbody>
            {#each allPosts as post}
                <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.status}</td>
                    <td>{post.rating}</td>
                    <td>{post.content}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div> -->