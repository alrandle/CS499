import React, { useState } from 'react';
import axios from 'axios';



class Test extends React.Component{
    state = {
        posts:[]
    }

  //Calls whenever the React Component mounts.
  componentDidMount = () => {
    this.getQuizes();
  }

  getQuizes = () => {
      axios.get('http://localhost:8080/api/quiz/exam')
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
    return(
      <div className='text-center text-white'>
      </div>
    )
  }
    
}

export default Test;