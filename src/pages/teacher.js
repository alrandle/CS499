import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';



class Teacher extends React.Component{
    state = {
        quizes:[]
    }

    getQuizes = ()=> {
        axios.get('/api/quiz')
            .then(() => {
                console.log()
            })
    }

    displayQuizes = (quizdb) => {
        if (!quizdb.length){
            return null;
        }
        return quizdb.map((post, index) => (
        <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
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

        let name = "bob" // maybe pass in the user's name from the database? 
        return (
            <>
            <div className='text-center text-white'>
                <h1>Teacher Panel </h1>
                <br></br>
                <h5> Here you can view quiz responses</h5>
                <h5> & create a quiz</h5>
                <br></br>
                <div className='d-flex'>
                    <div className='w-25'>
                        <h3>Welcome Back</h3>
                        <p>{name}</p>
                        <a href='/quiz-creator' className='btn btn-secondary'>Create A Quiz</a>
                    </div>
                    <div className='w-100'>
                        <h3>All Quizes</h3>
                        {this.displayQuizes(this.state.quizes)}
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Teacher;