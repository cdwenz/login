import { render } from "@testing-library/react";
import React from "react";
import Ingresar from "./LogIn";
import Register from "./Register";
function App(){
    render(
        <div>
            <button>
            <Ingresar/>
            </button>
            <button>
            <Register/>
            </button>
            
        </div>
    )
}

export default App;