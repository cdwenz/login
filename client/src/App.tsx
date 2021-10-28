
import {Route} from 'react-router-dom';
import Ingresar from "./LogIn";
import Register from "./Register";
import axios from 'axios';
function App(){
function handleClick(){
    axios.get('http://localhost:3001/logout')
    
}
    return(

        <div>
        <Route exact path='/'>
            <h1>Home</h1>
            <button onClick={handleClick}>Log out</button>
        </Route>
           <Route path='/logIn'component={Ingresar}/>
           <Route path='/register' component={Register}/>
            
        </div>
    )
            
        
}

export default App;