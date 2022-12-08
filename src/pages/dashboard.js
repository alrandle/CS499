import React, { useState } from 'react';
import axios from 'axios';

class Dashboard extends React.Component{

  // default state of quiz
    state = {
        quizID : '',
        posts : []
    }

    // Handle a click on the quiz.
    handleClick = (id) => {
        localStorage.setItem('quizID', id);
        window.open('exam', "_self");
    }

    // Calls whenever the React Component mounts.
    componentDidMount = () => {
      this.getQuizes();
    }

    // Returns available quizzes.
    getQuizes = () => {
        axios.get('http://localhost:8080/api/quiz/selection')
            .then((response) => {
                const data = response.data;
                this.setState({posts: data})
                console.log("Data retrieved!");
            })
            .catch((e) => {
              console.log("Error!", e)
            })
    }

    displayQuizes = (posts, role) => {
        // Do nothing if there are no quizzes
        if (!posts.length){return null;}
        // If the role is admin
        if(role=='admin'){
          // Returns uploaded quizzes
            return posts.map((post, index) => (
                <div id={index} key ={index}>
                    <div className='align-center text-left'>
                        <div className='flex-column'><h3 className='align-center'>{post.title}</h3>
                            <p></p></div>
                      <p className='align-center'>Uploaded: {post.date} by {post.creator}</p>
                      <button id={post._id} type="button" className="btn btn-secondary" onClick={() => this.handleClick(post._id)}>Load</button>
                      <br></br><br></br>
                    </div>
                </div>
              ));
        }
        // Not admin
        else {
          // Returns quizzes with info
            return posts.map((post, index) => (
                <div key={index}>
                  <a id={post._id} className='d-flex btn btn-dark justify-left text-left'>
                    <div className='align-center text-left d-flex'>
                      <p className='align-center'>{post.title} | Uploaded: {post.date} | Creator: {post.creator}</p>
                    </div>
                  </a>
                </div>
              ));
        }
    };

    // Sets the state on the event
    handleEventUpdate = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        })
      };


    render(){
        //React.useLayoutEffect(() => {
        //    NavigationPreloadManager.setOptions({headerShown: false});
        //});
        // the above code could be used in some way to remove the nav bar from the top of the page

        // If not logged-in
        if(localStorage.getItem('firstname') == null || localStorage.getItem('lastname') == null){
          return (
            <div className='text-center text-white'>
              <h1>Dashboard</h1>
              <code>Error! You must be logged in to do that!</code>
              <div>
                <a href='/login' className='btn text-white btn-outline'>Return to login</a>
              </div>
            </div>
          )};
        
        // Generates a unique identifier for the local storage.
        const id = localStorage.getItem('id');
        const name = localStorage.getItem('firstname') + " " + localStorage.getItem('lastname'); 
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        const role = localStorage.getItem('role');
        
        /* Realisitcally this should get verified with a server session variable
         * So that someone cannot go in and change their role on the local end and 
         * gain unauthorized access. This is just here as proof of concept for now
         */
        // If admin, show dashboard with quiz creater and analytics/grades
        if(localStorage.getItem('role') == 'admin'){
          return (
            <>
            <div className='text-center text-white'>
                <h1>Dashboard</h1>
                <br></br>
                <br></br>
                <div className='d-flex'>
                    <div className='w-25'>
                        <h3>Welcome Back</h3>
                        <p>{name}</p>
                        <p>usrnm: {username}</p>
                        <p>email: {email}</p>
                        <p>Role: <code>{role}</code></p>
                        
                        
                        <a href='/quiz-creator' className='btn btn-secondary'>Create A Quiz</a>
                        <a href='/analytics' className='btn btn-secondary'>Quiz Analytics/Grades</a>
                    </div>
                    <div className='w-100'>
                        <h3>All Quizes</h3>
                        <hr></hr>
                        <div className='quizs'>
                        {this.displayQuizes(this.state.posts, role)}
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
        }
        // If not admin, show normal dashboard
        else {
          return (
            <>
            <div className='text-center text-white'>
                <h1>Dashboard</h1>
                <br></br>
                <br></br>
                <div className='d-flex'>
                    <div className='w-25'>
                        <h3>Welcome Back</h3>
                        <p>{name}</p>
                        <p>usrnm: {username}</p>
                        <p>email: {email}</p>
                    </div>
                    <div className='w-100'>
                        <h3>All Quizes</h3>
                        <div className='quizs'>
                        {this.displayQuizes(this.state.posts)}
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
        }
    }
}

export default Dashboard;