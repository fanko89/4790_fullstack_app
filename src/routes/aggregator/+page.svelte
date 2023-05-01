<script>
	export let data, errors
	//$: console.log(data.topStories)
	let storyContent = ''
  let storyPic = ''
	function getStory(story) {
		storyContent = story.content
    storyPic = story.urlToImage
	}
</script>
<h1 class="text-4xl text-center font-bold py-4">News About Food</h1>
<div class="drawer overflow-x-hidden overflow-y-auto">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
    <div class="flex content-center justify-center w-1/2 ">
    	<img src= "{storyPic}" alt=""/>
      </div>
      <div class="flex content-center justify-center w-1/2 p-4">
        <h4>{storyContent}</h4>
      </div>
		<label for="my-drawer-2" class="btn btn-primary drawer-button">Open drawer</label>
	
	</div>
	<div class="drawer-side ">
		<label for="my-drawer-2" class="drawer-overlay " />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
			{#each data.topStories as story}
				<li class="card" on:click={getStory(story)}>
					<figure class="flex flex-col bg-gray-100 m-1">
						<img src={story.urlToImage} alt="Story pic"/>
						<figcaption>{story.title}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</div>



<!-- 
<script>


  export let data, errors
  //$: console.log(data.topStories)
  let storyContent = ''
  let storyPic = ''
  function getStory(story) {
  
    storyContent = story.content
    storyPic = story.urlToImage
 
  
  }
  console.log(storyPic)
</script>

<div class="drawer overflow-x-hidden overflow-y-auto">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">

    
    <div class="flex content-center justify-center w-1/2 ">
      <img src= "{storyPic}" alt="pic"/> 
      </div>
      <div class="flex content-center justify-center w-1/2 ">
      <h4 class="bg-slate-100">{storyContent}</h4>
    </div>
    <label for="my-drawer-2" class="btn btn-primary drawer-button">Open drawer</label>

  </div>
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay " />
    <ul class="menu p-4 w-80 bg-base-100 text-base-content">


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
</div> -->