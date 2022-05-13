## Zephyr Scale Frontend hire test

Hi there!

Thanks for your interest in working with us at Smartbear! We'd like the opportunity to see how you write code and solve problems similar to the ones we do, so we created this little challenge.

You can get started by installing the dependencies using `npm install` and running the app using `npm start`. All your changes will be live-reloaded.

The aim of this challenge is to build a 'test manager' application to handle some basic CRUD operations using React.Context and routing. Some of the foundations have already been set up for you.

We use the `@atlaskit` component library quite extensively in our work, so getting used to it will be a benefit to your future role. We've included some of the components in this project for you to use (documentation links are below).

This project uses Typescript. While it is not required to use it, it can help document your code and intentions. There are some typings for the state which you can find in `src/types.ts`, it is reccomended to take look at them.

## Requirements:

### Page 1 (/tests)

- Should have a table showing all tests via `@atlaskit/dynamic-table`
- Should have a 'Create new test' button that adds a new entry into the state
- Should be able to click on a table row to go to the next page:

### Page 2 (/edit-test/:testId)

- Should be able to modify a tests name via `@atlaskit/textfield`
- Should be able to modify a test's execution status via `@atlaskit/select` dropdown menu
- Should contain a button to delete the current test from the state.

We would also like to see how you approach testing. See src/TestManager.test.tsx for more details.

Some documentation for the components can be found here:

https://atlassian.design/components/button/
https://atlassian.design/components/select/
https://atlassian.design/components/dynamic-table/
https://atlassian.design/components/textfield/

If you have any questions you can email your hiring manager.

Thanks for your interest in us and we look forward to seeing your solution!

All the best,

The Smartbear team

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Install the dependencies with `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



 ## Technologies
 
 - Typescript
 - React/React context
 - Docker
 - Atlaskit(atlassian design)
 

## HOW TO RUN TEST || COMMAND LINE

 (1)Install dependencies to be able to run test;

 Command: npm install
 (2) Then run test
  Command : npm  test


## HOW TO RUN THE APP || COMMAND LINE
You can run the app in two ways.

(1) Regular way of starting a react app
  - Intall dependency
     Command :   npm install

   - Start the app
     Command :  npm start

(2) Alternative to the above instruction. You can start the app using docker,the app is containerized using
    docker, this is to avoid discrepancies of the app functioning differently on different devices.
   To run the app

   - Install docker on your device,and make sure it is running.
    kindly download docker if you don't have docker installed.
   https://docs.docker.com/get-docker/

   - Run Docker build
     Command : docker build --tag react .
   -  Run the app
     Command : docker run --publish 3000:3000 react
