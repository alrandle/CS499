/* quiz_creator.js
 * This page is responsible for allowing admins logged into the client to create a quiz
 * and upload it to the system. 
 * 
 * Daniel
 */

import React from "react";
import "./css/quiz-create.css"

let questionCount = 2 // used to keep track of the question number
async function newQuestion(){ // all code for the create new questions section
    console.log(`testing new button ${questionCount}`)
    const questionSection = `<label class="questions">Question ${questionCount}
                        <input
                        type="text"
                        placeholder="Question"
                        classname="form-control"
                        name="question${questionCount}"/>
                        <input
                        type="text"
                        placeholder="answer1"
                        className="form-control"
                        name="question${questionCount}-answer1"/>
                        <input
                        type="text"
                        placeholder="answer2"
                        className="form-control"
                        name="question${questionCount}-answer2"/>
                        <input
                        type="text"
                        placeholder="answer3"
                        className="form-control"
                        name="question${questionCount}-answer3"/>
                        <input
                        type="text"
                        placeholder="answer4"
                        className="form-control"
                        name="question${questionCount}-answer4"></input>
                        <input
                        type="number"
                        name="question${questionCount}-answer"
                        min="1"
                        max="4"/>
                    </label>`
    questionCount++
    let questionsLocation = document.getElementById("questions-section")
    let currentQuestions = questionsLocation.innerHTML
    currentQuestions += questionSection
    console.log(`status section: ${currentQuestions}`)
    questionsLocation.innerHTML = currentQuestions
    //console.log(questionSection)
}

class Creator extends React.Component{
    state = {
        title : ""
    }

    handleEventUpdate = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        })
    };

    // Load quiz creator
    render(){
        return (
            <div className="text-center text-white">
                <h1> Quiz Creator </h1>
                <button onClick={newQuestion}>New Question</button>
                    <div className="w-100">
                    <form onSubmit={this.handleRegsitrationForm} autoComplete="off">
                <div className="w-100">
                    <label>Title:
                    <input 
                        type="text"
                        placeholder='Title'
                        className="form-control"
                        name='title'
                        value={this.state.title}
                        onChange={this.handleEventUpdate}
                        required/>
                    </label>
                    <input
                        type="hidden"
                        name='creatorid'
                        value={localStorage.getItem('_id')}
                        required/>
                    <input 
                        type="hidden"
                        name='creator'
                        value={localStorage.getItem('username')}
                        required/>                        
                </div>
                <div className="w-100"
                id="questions-section">
                    <label class="questions">Question 1
                        <input
                        type="text"
                        placeholder="Question"
                        classname="form-control"
                        name="question1"/>
                        {/* will need to set the value control still*/}
                        <input
                        type="text"
                        placeholder="answer1"
                        className="form-control"
                        name="question1-answer1"/>
                        <input
                        type="text"
                        placeholder="answer2"
                        className="form-control"
                        name="question1-answer2"/>
                        <input
                        type="text"
                        placeholder="answer3"
                        className="form-control"
                        name="question1-answer3"/>
                        <input
                        type="text"
                        placeholder="answer4"
                        className="form-control"
                        name="question1-answer4"></input>
                        <input
                        type="number"
                        name="question1-answer"
                        min="1"
                        max="4"/>
                    </label>

                </div>
                    </form>
                    </div>
            </div>);
    }
}
export default Creator;
