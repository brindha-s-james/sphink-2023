# Fullstack Collection App

This repo is designed to provide space to code a fullstack app. It contains node modules and folders for databases, routes, api requests, react components, and redux actions and creators. Let's get going!

This is my personal project. The purpose of creating this is to show gratittude to the little people in my life and th epeople tat enrich my life, my friends. 
The home page will have the name of the family, the purpose and inspiration then you clikc on each of the family name and it will take us to the childs profile with a picture, their age and a description or a quote of some of the funniest things they say!

THose that have logged in can add and a profile but only the perosn that added the profile can edit and delete it. This is to try out authentication that we learnt briefly in week 7.



## Setup

### 0. Cloning and installation
- [ ] Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em">
    <summary>Tip</summary>

    You may also want to start a new branch
    ```sh
    cd into sphink2023
   run - <code> npm i</code>
    git checkout -b <branchname>
   
    <!-- ```
  </details>

<details>
  <summary>More about using <code>npm</code> vs <code>npx</code></summary>
 -->


run - <code> npm install knex sqlite3</code>
run - <code> npm run knex migrate:make <table-name> </code>
run - <code> npm run knex seed:make <table-name></code>

run - <code>npm run dev </code>



<!-- 
  - When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
</details> -->

---

## Requirements

### 1. Choosing your data set

<!-- - [ ] First, decide what you would like to keep a collection of. This could be a repo for keeping track of movies, books, gifs, cars, rocks, anything you fancy, but keep it simple!
  <details style="padding-left: 2em">
    <summary>More about your collection</summary>

    **Note:** the aim is to have some simple data. If you think you might need more than one database table, or have lots of details you want to store, how could you simplify the information you're keeping track of? Leave more complex data until later in the project. For example, I want to keep track of books that I want to read, ones that I have read, and ones that I own. To start with though, let's keep track of the books themselves. My data might look like:

    |id|title|author|
    |---|---|---|
    | 1 | Ready Player One | Ernest Cline |
    | 2 | Throwing Rocks at the Google Bus | Douglas Rushkoff | -->




Our first job is getting something showing on the front end from our database. Here's a list of steps in case they are useful. You can build in any order you like though ;)

## Back end

### 2. Building the database

- [ ] Design a database to store a list of your things (e.g. books)
- [ ] Build the migrations and seed data

Once you populate the database: run-
    `npm run knex migrate:latest` 
    `npm run knex seed:run` 

    
### 3. Building the API
- [ ] Build an API (back end route) to get the information from your database
- [ ] create db.ts in db
- [ ] import- import connection from "./connection"
- [ ] const db = connection
- [ ] add function getAllKids

- [ ] create models folder in route and add type.ts file with model in it for kids

- [ ] create a route for kids.ts
- [ ] import -import express from "express";
              -import * as db from '../db/db'
            -const router = express.Router()
- [ ] add function to get array of kids information

- [ ] in server/server.ts - add the API
- [ ] run <code> npm run dev. </code>
- [ ] Test your API 'GET' with Insomnia

## Front end

### 4. Setting the stage

- [ ] Build a React component with static html
    - render the app component on localhost:5173n to check if rendering.
    - 
- [ ] Build Redux reducer. Start with a hardcoded initial state
  <details style="padding-left: 2em">
    <summary>Tip</summary>
    
    For example:
    ```js
    const initialState = [{ id: 1, title: 'Ready Player One', author: 'Ernest Cline' }]
    ```
  </details>

- [ ] Use `useAppSelector` to display the redux state you hardcoded in the React Component

### 5. Building the API client
- [ ] Build an API client in the front end to request the information from your routes
- [ ] start with the function to `fetchAllData`

### 6. Building thunky actions
- [ ] Build Thunk actions to use the API and get the information
- [ ] Build Redux actions to save task data from the thunk
- [ ] Use `useAppDispatch` and `useEffect` to dispatch the thunk when your app loads

## Additional functionality

### 7. Adding, deleting, and updating records
- [ ] Include the ability to add a new record (will need a form in your components)
- [ ] Include the ability to remove/delete records
- [ ] Include the ability to update records (e.g. for correcting typos)

---
## Stretch

<details>
  <summary>More about stretch challenges</summary>
  
  - Forms can be tough to build accessibly. First ensure all parts of your form can be reached and used with keyboard-only navigation. Then test your form page with the WAVE browser extension, and fix any accessibility issues it detects
  - Is there any complex data you chose to not include earlier or any way you could expand this dataset?
    - You might have some other information (e.g. unread books vs. read books) that should be included in your database design, and this may require adjusting your database design
  - Could you add an external API (maybe an inspirational quote in the footer?)
  - If you haven't already, CSS!
</details>

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=my-fullstack-collection)
