
# E-Commerce Backend
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

In this project, I worked on the backend of an e-commerce site. My task was to make sure all the routes were directing to the necessary endpoints and that the relevenat CRUD functionality was executing at the selected endpoint. 

## Table of Contents

1. [INSTALLATION](#Installation)
2. [USAGE](#Usage)
3. [CONTRIBUTING](#Contributing)
4. [TESTS](#Tests)
5. [DEMO](#Demo)
6. [QUESTIONS](#Questions)
7. [LICENSE](#License)

## Installation

To start the project, you will need to clone the repository to your local machine and run the command: `npm i` in your terminal to get all the dependencies used. You will need to set up your local MySQL database. Make sure you change the credentials found in the .env file to match your database credentials. 

In your terminal, run the command `mysql -u root -p` inorder to open up your MySQL database. You will be prompted to insert your password for your databse. 

Once you have logged in, run the command `SOURCE db/schema.sql;` to set up your database. 

At this point, you can open another tab on your terminal and run the command `npm run seed` inorder to seed your database.

The entry point of the project is the server.js file and to invoke the project, you simply run `npm start` in your terminal. You will need to use an API client such as Insomnia to test all your endpoints.

## Usage

In Insomnia, you can set up all the endpoints found in the different routes and test each CRUD functionality for Products, Tags, and Categories.

## Contributing

Feel free to email me at johanneschitura@gmail.com if you would like to contribute to this project.

## Techonologies Used

- Node JS
- MySQL2
- Express
- Sequelize
- Insomnia


## Tests

Currently there are no tests for this project.

## Demo
You can view the demo of the project [HERE](https://youtu.be/QDVtdic3j78).

## Questions

If you have any questions or concerns pertaining to this project, please do not hesitate to contact me at johanneschitura@gmail.com and you can find me on github at https://github.com/veggiepilot


## License

Copyright (c) Johannes Chitura. All rights reserved.

Licensed under the [MIT](https://opensource.org/licenses/MIT) license.
