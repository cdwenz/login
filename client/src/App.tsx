import { render } from "@testing-library/react";
import {Link} from 'react-router-dom'
import React from "react";
import Ingresar from "./LogIn";
import Register from "./Register";
function App(){
    return(
    <div>
            <Link to='/LogIn'>Log In</Link>
            <Link to='/Register'>Register</Link> 
    </div>
    )
            
        
}

export default App;