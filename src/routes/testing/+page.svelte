<script>
import { DataStore } from 'aws-amplify'
import { Post, PostStatus } from '../../models'

const createPost = async () => {
    await DataStore.save(
        new Post({
            title: 'My First Post',
            rating: 10,
            status: PostStatus.INACTIVE
        })
    )
}

</script>

<div class="w-fit">
    <button class="btn" on:click={createPost}>save post</button>
</div>