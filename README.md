# User Registration Module

This project is a simple user registration module that includes login functionality. It uses React for the front-end, Express.js/Node.js for the back-end, and PostgreSQL as the database.

## Features

- User registration form
- User login form
- Encrypted passwords
- Environment variable configuration
- CORS enabled for front-end integration

## User Table Schema

The PostgreSQL user table consists of the following columns:

- `id`: A unique identifier for each user (Primary Key).
- `first_name`: The user's first name.
- `last_name`: The user's last name.
- `email`: The user's email address (must be unique).
- `password`: The user's hashed password.
- `created_at`: Timestamp of when the account was created.

## Dependencies

To install the project dependencies, run the following command:

```sh
npm install express pg bcryptjs dotenv cors
```
- express: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- pg: Non-blocking PostgreSQL client for Node.js. It features connection pooling and transaction management.
- bcryptjs: A library to help you hash passwords securely.
- dotenv: Module that loads environment variables from a .env file into process.env.
- cors: Package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  
## Getting Started
To get started with this project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory and install dependencies with npm install.
3. Set up your PostgreSQL database and create a .env file with the necessary environment variables.
4. Start the back-end server.
5. Navigate to the client directory, install dependencies with npm install, and start the React development server.
For more detailed instructions, refer to the 'Installation' and 'Usage' sections below.

## Installation
Server Setup
Navigate to the server directory.
Install Node.js dependencies:
```sh
cd server
npm install
```
Create your PostgreSQL database and user.
Set up your .env file with your database configuration.
Client Setup
Navigate to the client directory.
Install React dependencies:
```sh
cd client
npm install
```
Usage
To run the server, use:

```sh
npm start
```
To run the React development server, use:

```sh
Copy code
cd client
npm start
```
