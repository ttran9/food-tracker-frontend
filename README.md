# Food Tracker Frontend

- Frontend of my Food Tracker Full-Stack App

  - Some technologies listed below.
    - React
    - ReduxJS/Toolkit (state management)
    - React Testing Library (DOM testing)
    - Jest (runner)

- How to run this app locally

  - 1. npm run dev

- Running Unit Tests

  - npm run test
  - for this I'm also using the "--watch" flag so my tests will update when code changes occur.
    - by default I am just selecting to run all files so just press "a" after running the above command.

- Running e2e Tests
  - make sure our react app is running (make sure port 3001 is free or you'l have to select a different port to run on)
    - npm run dev
  - npx cypress open
    - steps below
      - 1. select "E2E Testing"
      - 2. select "Chrome" or "Firefox"
      - 3. select a the file "home.cy.js"
