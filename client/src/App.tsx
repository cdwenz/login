import { render } from "@testing-library/react";
import React from "react";
import {Route} from 'react-router-dom';
import Ingresar from "./LogIn";
import Register from "./Register";
function App(){
    return(
        <div>
        <Route exact path='/'>
            <h1>Home</h1>
        </Route>
           <Route path='/logIn'component={Ingresar}/>
           <Route path='/register' component={Register}/>
            
        </div>
    )
}

export default App;