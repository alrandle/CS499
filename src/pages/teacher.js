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
            <div className='btn-group'>
                <nav>
                    <ul className='btn-group btn-group-lg'>
                        <li>
                            <Link to='/create-quiz'><button className='btn btn-secondary'>Create A Quiz</button></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='text-center text-white'>
            <h1>Welcome {name}</h1>
            <br></br>
            <h5> Below are the available quizes made</h5>
            <div>{this.displayQuizes(this.state.quizes)}</div>
            </div>
            </>
        );
    }
}

export default Teacher;