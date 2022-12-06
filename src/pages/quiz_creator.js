import React from "react";

class Creator extends React.Component{
    
    render(){
        return (
            <div className="text-center text-white">
                <h1> Quiz Creator! </h1>
                <div className="container mt-3">
                <form onSubmit={this.handleRegsitrationForm} autoComplete="off">
                </form>
                </div>
            </div>);
    }
}
export default Creator;
