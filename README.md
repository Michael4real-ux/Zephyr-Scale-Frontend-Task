## Zephyr Scale Frontend hire test

The aim of this challenge is to build a 'test manager' application to handle some basic CRUD operations using React.Context and routing.

 ## Technologies

 - Typescript
 - React/React context
 - Docker
 - Atlaskit(atlassian design)
 

## HOW TO RUN TEST || COMMAND LINE
 Note: Kindly use yarn to install to avoid dependency issues.Because the dependency version given was strictly used as given in this task.

 (1)Install dependencies to be able to run test;

 Command: yarn 
 (2) Then run test
  Command : yarn  test


## HOW TO RUN THE APP || COMMAND LINE
You can run the app in two ways.

(1) Regular way of starting a react app
  - Intall dependency
     Command :   yarn 

   - Start the app
     Command :  yarn start

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
