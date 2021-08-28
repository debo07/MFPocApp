# MFPocApp - Micro Frontend POC App
_This is just a basic app using vanilla js where I am trying out micro frontend architecture._

## Installation & Development

This app requires [Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies and start the server.

First start the cart app in isolation
```sh
cd cart
npm i
npm start
```
This can be accessible at http://localhost:8082/ . This port is configured in webpack.config.js of `cart` folder.

Then start the products app in isolation
```sh
cd products
npm i
npm start
```
This can be accessible at http://localhost:8081/ . This port is configured in webpack.config.js of `products` folder.

Finally start the Host container app.
```sh
cd container
npm i
npm start
```
This can be accessible at http://localhost:8080/ . This port is configured in webpack.config.js of `products` folder. This webapp will show both the remote apps i.e. `cart` and `products`.


## License
MIT

P.S. - This is being dveloped by following an Udemy course for learning purpose.