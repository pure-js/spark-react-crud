# Frontend engineer trial

## Before you begin

You don’t need to use any APIs to store data, in-memory (mocked) storage already implemented in the initial application.
Technical requirements:

- Language: JavaScript
- Framework: React
  Initial React application will be provided.

## Statement

Extend the initial application with the following functionality:

- Implement create product form
- Implement update product form
- Implement delete product functionality
- Implement update product functionality
  Each form should be implemented on the new page.
  The create and update product forms should have the following validation:
- Name is required, length not greater than 200
- Rating is required, integer, not greater than 10
- A product should have from 1 to 5 categories
- If a product has an expiration date it should expire not less than 30 days since now
- If a product rating is greater than 8 it should automatically become “featured” product

## Optional

This part is not required but would be considered an advantage:

- The solution should have tests

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173/spark-react-crud/](http://localhost:5173/spark-react-crud/) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `pnpm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
