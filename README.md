# 4790_fullStackApp_backend
npm.cmd run-script build - to build 
npm.cmd run-script start - to start

## Vercel hosting 
[4790 FullStack App](https://4790-fullstack-app.vercel.app) But only when using the Vercel CLI to push to production!  Had to install node-fetch, isomorphic-unfetch, and aws-crt and then deploy using 
```bash
npx vercel --prod
npx vercel build -prod
```

### ***Page creates data stored in an AWS DataStore using a GraphQL API ***

[poplulates data into a table and gives the user the option to select an item to add to the datastore and delete items off the datastore ](https://vscode.dev/github/fanko89/4790_fullstack_app/src/routes/skills/seed/+page.svelte#L1)

### ***Login page that gets client data from aws amplify ***

[Lets users login](https://vscode.dev/github/fanko89/4790_fullstack_app/src/routes/auth/login/+page.svelte#L1)

### ***signup page that gets client data from aws amplify ***

[Lets users create a new account and verifies their email address by sending a code that they need to submit before creating login](https://vscode.dev/github/fanko89/4790_fullstack_app/src/routes/auth/signup/+page.svelte#L1)

### ***twetween progress bar to switch between health score to Weight watcher points***

[twetween progress bar to switch between health score to Weight watcher point](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L149)

### ***transisions in and out with button click on details/description/instruction/ingredients for recipes***

[details](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L164)

[description](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L165)

[instructions](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L166)

[igredients](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L167)


### ***animation***

[flip animation on ingredints when populating with button](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L195)

### ***toggle modal***

[toggle modal to open when clicking on meal image and has a link to source page for recipe](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/dashboard/+page.svelte#L118)

### ***different API***

[OMDB API](https://www.omdbapi.com/)

[NEWS API](https://newsapi.org/)

[COCKTAIL API](https://www.thecocktaildb.com)

[SPOONACULAR APIKEY](https://spoonacular.com/food-api)

### ***lifecycle functions***

[Onmount async fetch data to populate drink page.](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/src/routes/drink/+page.svelte#L10)

[Onmount data image](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/lib/components/Image/Image.svelte#L10)

[onMount IntersectionObserver](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/lib/components/Image/IntersectionObserver.svelte#L13)


### ***Data Inputs***

[email input](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/auth/signup/+page.svelte#L32)

[Last Name input](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/auth/signup/+page.svelte#L63)

[First Name input](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/auth/signup/+page.svelte#L51)

[password input](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/auth/signup/+page.svelte#L41)

### ***array methods***

[_filter_](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/api/movie/+server.js#L45)

[_map_](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/avatars/+page.js#L5)

### ***user events***

[_onclick toggle modal_](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/lib/components/MovieModal/MovieModal.svelte#L15)

[_onclick move story to page_](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/aggregator/+page.svelte#L30)

[_onclick hide sections_](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/dashboard/+page.svelte#L134)

[_onclick add step_](https://vscode.dev/github/fanko89/3790_rich_internet_application_development_svelte/blob/f1e7d93c5406015ba8d5018e2b7d72728ca7ded6/src/routes/dashboard/+page.svelte#L165)

