# Birds Supply Portal

This app aims at providing a platform for suppliers to provision/manage their products.

### Install Dependencies
* You need clone [Birds Supply Server](https://github.com/DavidHe1127/birds-supply-server) and run it in the terminal.
* After install app-level dependencies via `npm i` you also need to install [get-graphql-schema](https://github.com/graphcool/get-graphql-schema) globally to fetch latest schema from the server.

### How to run the app
Before run scripts below, make sure you have `Birds Supply Server` running in the background.
* Run `npm run get:schema` to get the latest `graphql` schema definition from `Birds Supply Server`.
* Run `npm run relay` to let `Relay` generate artifects (used by `relay` to process queries/mutations at the runtime) at the build time.
* Run `npm start` to start the app.

Two things you need to be mindful about:
* No need to run `npm run get:schema` if there is no change in `graphql` schema in the backend. 
* No need to run `npm run relay` if there is no change in `graphql` queries/mutations. i.e

```js
const productsQuery = graphql`
  query ProductsContainerQuery {
    viewer {
      ...Products_viewer
    }
    errors {
      id
      message
      data {
        type
      }
    }
  }
`;
```

### TODOs
* Add authentications (login, logout done to do signup)
* Use aws s3, api gateway, coginito to implement product image upload/display (WIP)
* Show qty on product card
* Add optimistic update
* Add pagination
* Add validation
* Design wireframe

### Assumptions
* Suppliers can only see their own products
* Each parrot species can only have one product linked to it under each supplier
* Lodge a request if parrot species does not exist in the current system

### issues
* Failed to remove the node from products connection
