# Birds Supply Portal

This app aims at providing a platform for suppliers to provision/manage their products.

### How to run the app
* You need clone [Birds Supply Server](https://github.com/DavidHe1127/birds-supply-server) and run it on the side.
* After install app-level dependencies via `npm i` you also need to install [get-graphql-schema](https://github.com/graphcool/get-graphql-schema) to fetch latest schema from the server.

### TODOs
* Add auth page
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
