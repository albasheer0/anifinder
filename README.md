Anifinder Project Readme
Anifinder is a Vue.js application that queries the AniList GraphQL API to search for anime and display their details, as well as allow users to save anime to their watchlist. This application uses Vue3, Vuetify, Vuex, and the Fetch API.

Installation
Clone this repository to your local machine.

Install dependencies using npm or yarn:

```
npm install
```

Start the development server:

```
npm run dev
```

Open your browser and go to http://localhost:3000 to view the application.

User Stories
As a user, I would like to search for Anime names so I can know more about the details of the Anime:

summary,
when it will air (or aired, if it’s no longer running),
the average rating score,
and also see a picture of the Anime.
As a user, I would like to save an anime to my watchlist. The watchlist can store a scrollable list of animes I am interested in watching later. Each item has:

A picture,
The name
The score
Usage
To search for anime, type the anime name in the search bar and press the "Enter" key. The application will then display a list of anime matching the search query. Click on an anime card to view more details.

To add an anime to your watchlist, click on the "Add to Watchlist" button on the anime details page. The anime will then be added to your watchlist, which you can access by clicking on the "Watchlist" button in the navigation bar.

Testing
To run the tests, use the following command:

```
npm run test
```

Build and Deployment

To build the production version of the application, use the following command:

```
npm run build
```

The built files will be located in the dist folder.

To preview the production build, use the following command:

```
npm run preview
```

To deploy the application to Firebase, use the following command:

```
npm run de
```

Dependencies
The following are the main dependencies used in this project:

vue: the core Vue.js library
vuetify: a Vue UI library
vuex: a state management pattern and library for Vue.js
fetch: a browser API for making HTTP requests
webfontloader: a JavaScript library for loading web fonts asynchronously
Dev Dependencies
The following are the main development dependencies used in this project:

vite: a build tool for modern web applications
jest: a JavaScript testing framework
eslint: a JavaScript linter
sass: a CSS preprocessor
typescript: a typed superset of JavaScript
@vue/test-utils: a Vue.js testing utility library
vite-plugin-vuetify: a Vuetify plugin for Vite
vue-tsc: a TypeScript checker for Vue files
