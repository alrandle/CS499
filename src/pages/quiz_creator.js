/* quiz_creator.js
 * This page is responsible for allowing admins logged into the client to create a quiz
 * and upload it to the system. 
 * 
 * Daniel
 */

import React from "react";

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
                </form>
                </div>
            </div>);
    }
}
export default Creator;
