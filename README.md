# Node.js Project

This Node.js project demonstrates various tasks, including printing "Hello World," creating a server, and reading from a file to console.log the content.
This Node.js project also generates a random password using the `generate-password` package and sends an email with Nodemailer.
## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tasks](#tasks)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Description

The project provides examples for common Node.js tasks, such as printing "Hello World," creating a server, reading from a file, and how to use the `generate-password` package to generate secure random passwords and how to send emails using Nodemailer in a Node.js application.

## Features

- Demonstrates printing "Hello World" in Node.js.
- Illustrates creating a simple HTTP server.
- Shows how to read from a file and console.log its content.
- Generates random passwords with specified criteria.
- Sends an email with the generated password using Nodemailer.
- 
## Installation

Clone the repository and install dependencies:

git clone https://github.com/SimiGold1/Node-ck.git
cd Node-ck
npm install

## Usage
# Hello World
cd task-hello-world
node hello-world.js

# Create Server
cd task-create-server
node server.js

# Read and Console.log from File
cd task-read-file
node read-file.js
# Run the project to generate a random password and send an email:
npm start
Run the password generator script:

#To generate random password run:
node password-generator.js

#To run email sender script
node email-sender.js

## Tasks
Install Node.js
1- In this task, you will:

Create a file named hello-world.js
Write a program to print "HELLO WORLD" to the console
2- In this task, you will:

create a server  
Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
3-  In this task, you will:

First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
Second, create a program that reads and console.log data from hello.txt
 

4- In this task, you will:

Create a file named "password-generator"  
(use npm install generate-password : (https://www.npmjs.com/package/generate-password)

Create a function that generates random passwords and console.log() that password.
 

5-  In this task, you will:

create a file named email-sender  
npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

Try to send your self email using this
 

 

PS: Don't forget to delete your personal information before uploading it to GitHub :) 
## Configuration
Before running the email sender script, configure your email credentials and recipient information in email-sender.js.

## Troubleshooting
If you encounter email authentication issues, ensure that you are using an "App Password" for Gmail.
Check the console output for any error messages.

##Contributing
Feel free to contribute by opening issues or submitting pull request

## License
This project is licensed under the MIT License.

Note:  

This updated README now includes information about the "Hello World," "Create Server," and "Read and Console.log from File" tasks. Each task has its dedicated section, and the "Usage" section provides instructions on running each task individually. Adjust the placeholders accordingly.

In this example, placeholders like "yourusername" and "password-generator-email-sender" should be replaced with your actual GitHub username and project name. The README provides clear sections for the project's description, features, installation, usage, tasks, configuration, troubleshooting, contributing, and license. Customize it further based on your project's specifics.


