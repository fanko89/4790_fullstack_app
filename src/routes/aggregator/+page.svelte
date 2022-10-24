<script>
  import sanitizeHtml from "sanitize-html" //changing html to text
  export let data, errors
  //$: console.log(data.topStories)

  let newsContent = ''
  function getStory(story) {
   newsContent = (story.text)
}
</script>

<div class="drawer">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content goes here -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button">Open</label>
      <div class="hero bg-base-300">
        <p>{@html newsContent}</p>

      </div>
    
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
    {#each data.topStories as story }
        <li class="card" on:click={getStory(story)}>
          <figure class="flex flex-col">
       <!--  <img src={story.image_url} alt="news pic"/> -->
            <figcaption>{story.title}</figcaption>
          </figure>
        </li>
     {/each}
      </ul>
    
    </div>
  </div>