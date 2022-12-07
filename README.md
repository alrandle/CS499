# About
* This application allows users to take quizzes for grades and for administrators to deploy new quizzes.
* This project was to test out the waters of React and NodeJS app development & deployment.

## Features
* Individual User Accounts
* Secure front-end password salting & hashing
* Take quizzes for grades
* Create quizzes for users
* Quiz Analytics

# To Download & Install
    $ git clone https://github.com/alrandle/CS499.git
    $ cd ./CS499/backend
    $ npm run all
    
### Backend Dependencies:
    "axios": "^1.2.0",
    "bcryptjs": "^2.4.3",
    "concurrently": "^7.6.0",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "mongoose": "^6.7.4",
    "morgan": "^1.10.0"
    
### Frontend Dependencies: 
    "axios": "^1.2.0"
    "bcryptjs-react": "^2.4.6"
    "bootstrap": "^5.2.3"
    "react": "^18.2.0"
    "react-dom": "^18.2.0"
    "react-scripts": "5.0.1"
    "web-vitals": "^2.1.4"

### Layout
    Quiz-App
    | - Home : Home page/About section
    | - Login/Registration : Returning/New User forums
    | - Dashboard (Student/Teacher Dash) : For users / Admins to navigate webapp functions
    | - | Exam (Quiz function)
    | - | Quiz Creator
    | - | Analytics
