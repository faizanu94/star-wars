# star-wars

> Star Wars data fetched online from https://swapi.dev

## Key Points

-   The directory **build** contains optimized production build (deployed on Netlify)
-   No polyfills for Internet Explorer
-   Application has been built with **React** and bootstrapped with **npx create-react-app star-wars**
-   Data aggregation of characters is achieved through RxJS
-   Redux is used for application state management
-   Bootstrap is used for designing components

## Running the Application

Clone the repository

```bash
git clone https://github.com/faizanu94/star-wars.git
```

Install the application dependencies

```bash
yarn
```

Serve the application – this will serve the application on default port 3000

```bash
yarn start
```

Build the application for production

```bash
yarn build
```

## Server Details

> Find the details the application server

-   Data is fetched from third party source (https://swapi.dev/) through APIs
-   No Authentication required (API limit might exceed)
-   HTTP GET Method is used only on data sets fetched from API

## Architecture Details

> Find the details about several pieces of the application listed below

-   `/public` contains static assets
-   `/src` contains application building blocks
-   `/src/components` contains components building up the whole applications
-   `/src/containers` application containers using the components
-   `/src/redux` application state management

## Assumptions

-   API limit exceeding is not supported (should be achieved by adding a verified key page)
-   Internet Explorer support is not required (should be acheved by adding pollyfills)

## What is missing or could be improved?

-   Layout is quite simple, more effects would provide better user experience
-   Mobile first approach to target mobile devices
-   Search suggestions on user inputs
-   Real time data updates (not practical use case as movies / characters data is mostly static)
-   There should have been unit and e2e tests

## Screen Shots

Home Page (fetching movies)
![](https://user-images.githubusercontent.com/7299120/129484961-ad4ad19a-fead-4e74-80be-9f05e31a92c2.png)

Movie not selected
![](https://user-images.githubusercontent.com/7299120/129485446-4188ee73-2581-45d2-b867-ad3b1b352770.png)

Movie selected
![](https://user-images.githubusercontent.com/7299120/129484865-7988bac1-423c-49c9-bb0b-822594af65f2.png)

Movie filter
![](https://user-images.githubusercontent.com/7299120/129484882-787afd9c-3cc2-451c-b5c6-1ac6972ca880.png)

Gender filter
![](https://user-images.githubusercontent.com/7299120/129484907-d8ecea64-a47e-46da-b822-e1f67d83703b.png)

Table last row
![](https://user-images.githubusercontent.com/7299120/129484930-f38d0a34-c2ac-47a2-982d-ee7e816e6958.png)

https://swapi.dev/api/films
![](https://user-images.githubusercontent.com/7299120/129485556-8c1235a4-5160-46a7-abcc-67b1d92372c5.png)
