<!-- <script>
  import sanitizeHtml from "sanitize-html" //changing html to text
  export let data, errors
  $: console.log(data.topStories)

  let newsContent = ''

  function getStory(story) {
   newsContent = sanitizeHtml(story.text)

}
</script> -->

<!-- <div class="drawer">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
     
      <label for="my-drawer-2" class="btn btn-primary drawer-button">Open</label>
      <div class="hero bg-base-300">
        <p>{@html newsContent}</p>

      </div>
    
    </div> 
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label> 
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    
    {#each data.topStories as story }
        <li class="card" on:click={getStory(story)}>
          <figure class="flex flex-col">
 
            <figcaption>{story.title}</figcaption>
          </figure>
        </li>
     {/each}
      </ul>
    
    </div>
  </div> -->

  <script>
    import { dataset_dev } from "svelte/internal"
  
  
    export let data, errors
    //$: console.log(data.topStories)
    let storyContent = ''
    let storyPic = ''
    function getStory(story) {
    
      storyContent = story.content
      storyPic = story.urlToImage
      console.log(storyPic)
    
    }
  </script>
  
  <div class="drawer overflow-x-hidden overflow-y-auto">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      <div class="flex content-center justify-center w-1/2 ">
        <img src= "{storyPic}" alt=""/> 
        </div>
        <div class="flex content-center justify-center w-1/2 ">
        <h4 class="bg-slate-100">{storyContent}</h4>
      </div>
      <label for="my-drawer-2" class="btn btn-primary drawer-button">Open drawer</label>
  
    </div>
    <div class="drawer-side ">
      <label for="my-drawer-2" class="drawer-overlay " />
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        {#each data.topStories as story}
          <li class="card" on:keypress={getStory(story)}>
            <figure class="flex flex-col bg-gray-100 m-1">
              <img src={story.urlToImage} alt="Story pic"/>
              <figcaption>{story.title}</figcaption>
            </figure>
          </li>
        {/each}
      </ul>
    </div>
  </div>