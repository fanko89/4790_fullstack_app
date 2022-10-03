<script>
export let data, errors
$: console.log(data.newsData)

let newsContent = ''
function getNews(newsStory){
  newsContent =newsStory.description 

}
</script>

<div class="drawer">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button">Open drawer</label>
      <div class="hero bg-base-300">
        <p>{newsContent}</p>

      </div>
    
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-2 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        {#each data.newsData as newsStory (newsStory.uuid)}
        <li class="card" on:click={getNews(newsStory)}>
          <figure class="flex flex-col">
            <img src={newsStory.image_url} alt="news pic"/>
            <figcaption>{newsStory.title}</figcaption>
          </figure>
        </li>
     {/each}
      </ul>
    
    </div>
  </div>