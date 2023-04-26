# Step by Step commands (for reference).

1. create empty package.json

- npm init -y

2. install dependencies.

- npm i axios react react-dom react-redux react-router-dom @reduxjs/toolkit

3. install dev dependencies.

- npm i -D @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @testing-library/jest-dom @testing-library/react @testing-library/user-event babel-loader css-loader style-loader html-webpack-plugin webpack webpack-cli webpack-dev-server mini-css-extract-plugin jest jest-environment-jsdom cypress

- we need jest as our test runner
- we need a proper jsdom environment

4. add relevant scripts to package.json

- See the "start", "dev", "test", and "prod" scripts.

5. create the webpack file for the dev environment

- touch webpack.config.dev.js
- View the file (webpack.config.dev.js) for the configuration.

6. create the webpack file for the production environment.

- touch webpack.config.prod.js
- View the file (webpack.config.prod.js) for the configuration.

7. create a babel configuration file at the root of our application.

- touch .babelrc
- View the file for the configuration
- for transpiling our JSX code.

8. create a .gitignore

- touch .gitignore
- View the file for the contents.

9. create a README (touch README.md)

- touch README.md
- This is more of an overview for anyone (or myself) to view when pushing to GitHub.

10. create a notes.md file

- touch notes.md
- This file is just for how I solved any issues I came across and links to other helpful resources.

11. create directories to house application code

- components, constants, redux, services, and validators.
- command is below.
- mkdir -p src/{components,constants,redux,service,validator}

12. create entry points for the app.

- command is below
- touch src/{index.html,index.js}

13. Create the main App component

- touch src/components/App.js

14. Hook up the redux store to our app.

- mkdir -p src/redux/{slice,store}
- touch src/redux/store/{index.js,storeDev.js,storeProd.js}
- touch src/redux/slice/{index.js,auth.js}
- touch src/service/auth.service.js

# Notes.

- I could use the Context API but I was worried about having many providers so instead I am using redux to help deal with having a global store with multiple slices instead of using the Context API and having multiple providers.
