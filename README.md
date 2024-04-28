# Ecommerce Micorservices store

This project is an ecommerce microservices store built with a React frontend and an Express backend, using MongoDB as the database. It showcases the use of microservices architecture in building scalable ecommerce platforms. The frontend is built with React for a dynamic and responsive user interface, while the backend is powered by Express for handling API requests and MongoDB for data storage.

## Table of Contents

- [Requirements](#requirements)
- [Clone Repository](#clone-repository)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running with Docker Compose](#running-with-docker-compose)
- [Screenshots](#screenshots)

# Requirements
Make sure that you have the following installed:
- [node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)
- npm
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the mongodb service with `sudo service mongod start`

## Clone Repository

To clone the repository, run the following command in your terminal:
```bash
git clone https://github.com/Ebenezr/yolo.git
```

## Installation

## client
### Navigate to the Client Folder:
```bash
cd client
```

### Run the folllowing command to install the dependencies
```bash
 npm install
```

### Run the folllowing to start the app
```bash
 npm start
```

## Backend
### Open a new terminal and run the same commands in the backend folder
```bash
 cd ../backend
```
### Run the folllowing command to install the dependencies
```bash
 npm install
```

### Run the folllowing to start the server
```bash
 npm start
 ```

## Running with Docker Compose
If you have Docker installed, you can use Docker Compose to run the application:
```bash
docker-compose up
```

 ## Go ahead a nd add a product (note that the price field only takes a numeric input)

## Screenshots
## App
 ![image](https://github.com/Vinge1718/yolo/assets/37300065/400c8e09-3cfd-4904-b030-4f25aa593ed6)

## Docker image client
![image](https://github.com/DannyBen/docker-alpine-mongo/assets/37300065/63aa04e9-0074-4ae1-ab15-c141a72b918c)
## Docker image server
![image](https://github.com/DannyBen/docker-alpine-mongo/assets/37300065/de75aef1-9e6a-4c77-8958-5a7d6ab79a06)
