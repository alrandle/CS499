# About
* This application allows teachers to create quizzes, view grades for quizzes and have their students take quizzes.
* To start clone the repository then 
    git clone https://github.com/alrandle/CS499.git
    cd backend
    npm run all
    

## Features

* Separate teacher and student account types
* Secure account creation and storage
* Create quizzes
* Take quizzes
* View quiz grades

## Structure

### Dependencies:
    testing-library/jest-dom 5.16.5
    testing-library/react 13.4.0
    testing-library/user-event 13.5.0
    bcryptjs 2.4.3
    bootstrap 5.2.2
    mongoose 6.7.0
    react 18.2.0
    react-dom 18.2.0
    react-scripts 5.0.1
    web-vitals 2.1.4

    mongodb for database/back-end
    react for front-end
    boostrap for styling

### Layout
    Welcome Page
    | - Home
    | - Login
    | - | Quiz / Teacher Page
    | - | - | quiz (student view)
    | - | - | quiz grades / create quiz (Teacher view)
    | - Mongo

## Installation

#### git
    sudo apt install git-all

#### node
    sudo apt install -y nodejs

#### quiz-app
    git clone https://github.com/alrandle/CS499

#### setup
    front-end:
        npx create-react-app quiz-app
        cd quiz-app
        npm i -D react-router-dom
        npm install bootstrap@5

    back-end
        mkdir backend
        cd backend
        npm init -y
        touch index.js
        npx nodemon index.js

#### start app
    in "quiz-app" directory: npm start
    go to http://localhost:3000 in browser to view app

## Usage
