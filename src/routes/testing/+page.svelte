<script>
import { DataStore, Predicates } from 'aws-amplify'
import { Post, PostStatus } from '../../models'
export let data = []

const createPost = async () => {
    await DataStore.save(
        new Post({
            title: 'My First Post - feb 12',
            rating: 3,
            status: PostStatus.ACTIVE
        })
    )
}
const deletePost = async () => {
    await DataStore.query(Post, Predicates.ALL)
 
    }

</script>

<div class="w-fit">
    <button class="btn" on:click={createPost}>save post</button>
    <button class="btn" on:click={deletePost}>delete all post</button>
    <table class="table w-full">
        <thead>
            <tr>Id</tr>
            <tr>Title</tr>
            <tr>Status</tr>
            <tr>Rating</tr>
            <tr>content</tr>
        </thead>
        <tbody>
            {#each $post as post}
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.status}</td>
            <td>{post.rating}</td>
            <td>{post.content}</td>
            {/each}
        </tbody>
    </table>
</div>