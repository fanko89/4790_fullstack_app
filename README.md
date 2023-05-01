# 4790_fullStackApp_backend
```bash
npm run dev
npm.cmd run-script build - to build 
npm.cmd run-script start - to start
```
## Vercel hosting 
[4790 FullStack App](https://4790-fullstack-app.vercel.app) But only when using the Vercel CLI to push to production!  Had to install node-fetch, isomorphic-unfetch, and aws-crt and then deploy using 
```bash
npx vercel --prod
npx vercel build -prod
```
### Change profile picture 
[Shows default image unless user uploaded one is authenticated](https://github/fanko89/4790_fullstack_app/blob/202014d05e7487f8d52500c09cdfaea622c42068/src/lib/components/header/Header.svelte#L21)

[Let's users decided what profile picture they want and Img is saved to S3 bucket](https://github/fanko89/4790_fullstack_app/blob/cf52613834d8058e16244eb16d305763aed7ebc2/src/routes/upload/+page.svelte#L12-L13) 
##### For the below example, the submitHandler function calls the preventDefault() method on the event object to prevent the default form submission behavior, creates a new FileReader object, logs the first file object from the files array to the console, reads the contents of the file as an ArrayBuffer using the readAsArrayBuffer() method, sets an onload event handler to execute a function when the file has finished loading, logs the contents of the file as an ArrayBuffer to the console when the file has finished loading, and uploads the file to an S3 bucket using the Amplify Storage API's put() method while logging the upload result or error to the console.
```javascript
	async function submitHandler(event) {
		event.preventDefault()
		const fr = new FileReader()
		console.log(files[0])
		fr.readAsArrayBuffer(files[0])
		fr.onload = () => {
			console.log(fr.result)
			Storage.put(files[0].name, fr.result)
				.then((result) => console.log(result))
				.catch((err) => console.log(err))
		}
	}
```


### ***AWS DataStore using a GraphQL API ***

[poplulates api] data into a table and gives the user the option to select an item to add to the datastore and delete items off the datastore (https://github/fanko89/4790_fullstack_app/src/routes/items/seed/+page.svelte#L1) 


This is my data store that you can add items to to the store if you have user permision level to do so.[URL to website data table](https://4790-fullstack-app.vercel.app/items/seed)

### ***Login page that gets client data from aws amplify ***

user can signin using aws cognito or create a new account.[Lets users login](https://github/fanko89/4790_fullstack_app/src/routes/auth/login/+page.svelte#L1)

### ***signup page that gets client data from aws amplify ***

Lets users create a new account and verifies their email address by sending a code that they need to submit before creating login[signup code](https://github/fanko89/4790_fullstack_app/src/routes/auth/signup/+page.svelte#L1)

### ***twetween progress bar to switch between health score to Weight watcher points***

twetween progress bar to switch between health score to Weight watcher point [twetween code](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L149)



### ***transisions in and out with button click on details/description/instruction/ingredients for recipes***

This shows details about the recipe[details](https://github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L164)

This shows description about recipes[description](https://github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L165)

This shows the instructions on how to make the food[instructions](https://github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L166)


this shows what ingredients needed need to make the food in steps using the addStep function[igredients](https://github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L167)
```javascript
		const addStep = () => {
		const step ={
			id: num,
			text: data.recipes[0].extendedIngredients[num].name,
			measures: data.recipes[0].extendedIngredients[num].measures.us.amount,
			measuresUnit: data.recipes[0].extendedIngredients[num].measures.us.unitShort,
			num: num++
		}
	
		stepList =[step, ...stepList]
	}
		
```

### ***animation***

flip animation on ingredints when populating with button[populate code](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L195)

### ***toggle modal***

toggle modal to open when clicking on meal image and has a link to source page for recipe [toggle code](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L118)

### ***different API***

[OMDB API](https://www.omdbapi.com/)

[NEWS API](https://newsapi.org/)

[COCKTAIL API](https://www.thecocktaildb.com)

[SPOONACULAR APIKEY](https://spoonacular.com/food-api)

[PEXELS APIKEY](https://www.pexels.com/api/)

[ALPHAVANATAGE APIKEY](https://www.alphavantage.co/)

### ***lifecycle functions***

[Onmount] async fetch data to populate drink page.(https://github/fanko89/3790_rich_internet_application_development_svelte/src/routes/drink/+page.svelte#L10)
```javascript
onMount(async () => {
		const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
		const drinkData = await response.json()
		// console.log(drinkData)
		allDrinks = drinkData.drinks
	}
```
[Onmount for data image](https:///github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/lib/components/Image/Image.svelte#L10)

[onMount IntersectionObserver](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/lib/components/Image/IntersectionObserver.svelte#L13)


### ***Data Inputs***

[email input](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/auth/signup/+page.svelte#L32)

[Last Name input](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/auth/signup/+page.svelte#L63)

[First Name input](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/auth/signup/+page.svelte#L51)

[password input](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/auth/signup/+page.svelte#L41)

### ***array methods***

Filters through to only show movies[filter code](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/api/movie/+server.js#L45)
```javascript
return allTheMovies.filter(movie => (movie.Type === 'movie' && movie.Poster !== 'N/A'))
```

[_map_](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/avatars/+page.js#L5)

### ***user events***

[_onclick toggle modal_](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/lib/components/MovieModal/MovieModal.svelte#L15)

[_onclick move story to page_](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/aggregator/+page.svelte#L30)

[_onclick hide sections_](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/dashboard/+page.svelte#L134)

[_onclick add step_](https://github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/dashboard/+page.svelte#L165)

