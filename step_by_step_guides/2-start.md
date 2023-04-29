1. Create the main App component

- touch src/components/App.js

2. Create routing

- create a variety of components. some of these will be placeholders and will be used later.
  - mkdir -p src/components/layout
  - touch src/components/layout/{footer.js,footer.css,header.css,header.js,home.js,secure.js}

3. Hook up the redux store to our app.

- mkdir -p src/redux/{slice,store}
- touch src/redux/store/{index.js,store-dev.js,store-prod.js}
- touch src/redux/slice/{index.js,auth.js,message.js}
- touch src/service/auth-service.js

4. Create tests for the home page.

- touch src/components/layout/home.test.js

- create extra configuration files:

  - touch jest.config.js
  - touch src/setup-tests.js
  - mkdir tools
  - touch tools/style-mock.js

  - setting up react testing library:

    - make sure to configure the following below.
      - jest.config.js
      - setup-tests.js
      - style-mock.js

  - setting up cypress
    - npx cypress open
      - 1. choose "e2e testing"
      - 2. hit continue after all the default configuration files are displayed.
      - 3. For now I'll only be choosing to work with e2e testing in chrome.
      - 4. At the "create your first spec" screen choose "create new spec"
        - note: Choosing scaffold example specs is acceptable but many examples get generated and for this application I do not need to reference the examples.
      - 5. Path for the new spec should be "cypress/e2e/home.cy.js"
        - Just click "okay, run the spec"
    - [cypress configuration](https://docs.cypress.io/guides/references/configuration#Actionability)
    - this was useful for seeing what options would go into the cypress.config.js at the root of our application.

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
      - 3. select the file "home.cy.js"

- refer to home.test.js and home.cy.js for the details of how the tests are written
  - note: these are placeholder tests and will not be used in the real application.
