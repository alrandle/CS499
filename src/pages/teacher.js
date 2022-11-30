import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Teacher(){
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
        </div>
        <div id="quiz">

        </div>
        </>
    )
}

export default Teacher;