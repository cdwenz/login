import React from "react";
import { useForm } from 'react-hook-form';
import "./LogIn.css";

type LogIn = {
  username: string;
  password: string;
}

function Ingresar() {
  const {register, handleSubmit} = useForm<LogIn>()

  const onSubmit = handleSubmit((data) => {
    /* alert(JSON.stringify(data)) */
    alert(register)
  })

  return (
  <div className='container'>
    <div className='title'>
    <h1>Ingresa</h1>
    </div>
    <form onSubmit={onSubmit}>
      <div className='inputs'>
     
        <input {...register('username',{ required: true })} id="username" name="username" type="text" placeholder='Usuario'/>
       {/*  {
          errors.username && <div className="error">Enter your name</div>
        } */}
      
        {/* <label htmlFor="password">Contraseña</label> */}
        <input {...register('password',{ required: true })} id="password" name="password" type="password" placeholder='Contraseña'/>
        {/* {
          errors.lastname && <div className="error">Enter your last name</div>
        } */}
      </div>
      <p>¿No tienes cuenta?</p>{/* <Route path ="/register" component = {Register}/> */}
      <button type="submit">Ingresar</button>
    </form>
    </div>
  );
}

export default Ingresar;