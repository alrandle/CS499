import React, { useState } from 'react';
import axios from 'axios';

class Exam extends React.Component{
    state = {
        quizID:'',
        posts:[]
    }

    componentDidMount = () => {
        this.state.quizID = localStorage.getItem('quizID')
        this.getQuiz();
      }


    getQuiz = (id) => {
        axios.get('http://localhost:8080/api/quiz/exam', {params:{quizID: id}})
            .then((response) => {
                const data = response.data;
                this.setState({posts: data})
                console.log("Data retrieved!", data);
            })
            .catch((e) => {
              console.log("Error!", e)
            })
    }

    displayQuiz = (posts) => {
        const map = posts.map((post, index) => (
            <div id={index} key={index}>
                <p>Q.{index+1}</p>
                <div className='text-left d-flex'>
                    <p className='align-center'>{post.title} | Uploaded: {post.date} | Creator: {post.creator}</p>
                </div>
            </div>
            ));
        return map;
    }
    

    handleEventUpdate = (event) => {
        const target = event.target;
        const name = target.name; 
        const value = target.value;
    
        this.setState({
          [name]: value
        })
        console.log(this.state);
      };


    render(){;
        return(
            
            <div className='text-center text-white'>
                <div>
                    {this.displayQuiz(this.state.posts)}
                </div>
            </div>
        );
    }
}

export default Exam;