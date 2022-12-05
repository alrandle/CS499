import React from "react";

class QuizCreator extends React.Component{
    render(){
        return (
            <div className="text-center text-white">
                <h1> Create new quiz! </h1>
                <div className="container mt-3">
                <form onSubmit={this.handleRegsitrationForm} autoComplete="off">
                    <div className="mb-3 mt-3">
                        <label>Username:
                        <input 
                            type="text" 
                            className="form-control"
                            name='username'
                            value={this.state.username}
                            onChange={this.handleEventUpdate}
                            required/>
                        </label>
                    </div>
                </form>
                </div>
            </div>);
    }
}
export default QuizCreator;
