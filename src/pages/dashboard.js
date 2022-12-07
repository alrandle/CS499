import React, { useState } from 'react';
import axios from 'axios';

class Dashboard extends React.Component{
    state = {
        posts:[]
    }

    //Calls whenever the React Component mounts.
    componentDidMount = () => {
      this.getQuizes();
    }

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

    displayQuizes = (posts) => {
        if (!posts.length){return null;}
        
        return posts.map((post, index) => (
          <div key={index}>
            <a href='' className='d-flex btn btn-dark justify-left text-left'>
              <div className='align-center text-left d-flex'>
                <p className='align-center'>{post.title} | Uploaded: {post.date} | Creator: {post.creator}</p>
                <input
                    type='hidden'
                    name={post._id}
                />
              </div>
            </a>
          </div>
        ));
    };

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
        
        const id = localStorage.getItem('id');
        const name = localStorage.getItem('firstname') + " " + localStorage.getItem('lastname'); 
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');
        const role = localStorage.getItem('role');
        
        /* Realisitcally this should get verified with a server session variable
         * So that someone cannot go in and change their role on the local end and 
         * gain unauthorized access. This is just here as proof of concept for now
         */
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
                        <div className='quizs'>
                        {this.displayQuizes(this.state.posts)}
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
        }else{
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