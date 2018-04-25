# Birds Supply Portal

This app aims at providing a platform for suppliers to provision/manage their products.

### What does this app do?
It allows birds suppliers to manage their products. Product is created based on a bird model that defines intrinsic values such as lifespan, weight, length, distributions etc.

Every supplier in our system will be allocated an account to login to the portal.

We will keep committing to this app to embrace more features.

It is an ongoing project.

### Why we build it?
When new techs emerge, I always want to learn them (relay, graphql, aws, docker etc) by not just reading posts or writing experimental code about them but building something using them. That way I will gain hands-on experiences with them and a clear understanding and memory of how they work. More importantly, it serves as a manual I can always refer to for a quick reference when I forget how I use them.

### About the contributors
All contributors in this project have full-time jobs and try to squeeze time out of their spare time to make as much contribution as they can to make this app better.

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

### Known issues
* Unauthenticated users can bypass auth check through visiting route `/products/new` where auth check not happens.

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
* Tidy MS3 api gateway - remove unused apis
* Response code mapping
* Add authentications (login, logout done to do signup)
* Use aws s3, api gateway, coginito to implement product image upload/display (WIP)
* Show qty on product card
* Add multiple .env files for different deployment targets
* Add optimistic update
* Add pagination
* Add validation
* Design wireframe

### Investigation
* What is the idiomatic way to overwrite semantic-ui built-in sttyles without using !important?

### Assumptions
* Suppliers can only see their own products
* Each parrot species can only have one product linked to it under each supplier
* Lodge a request if parrot species does not exist in the current system

### Issues
* Failed operation on s3 image upload through api gateway due to 401 status code does not ask users to re-authenticate
