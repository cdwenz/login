import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./LogIn.css";

type LogIn = {
  email: string;
  password: string;
}

function Ingresar() {
  const {register, handleSubmit,formState: { errors }} = useForm<LogIn>()

  const onSubmit = handleSubmit((data) => {
    /* alert(JSON.stringify(data)) */
    /* alert(register) */
    axios.post('http://localhost:3001/login',data)
    .then(res=>window.location.href='/')
    .catch(error=>console.log(error.message))
  })

  return (
  <div className='container'>
    <div className='title'>
    <h1>Ingresa</h1>
    </div>
    <form onSubmit={onSubmit}>
      <div className='inputs'>
     
        <input {...register('email',{ required: true, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} id="email" name="email" type="text" placeholder='Email'/>
        {
          errors.email && <p>Email invalido</p>
        }
      
       
        <input {...register('password',{ required: true,minLength:8 })} id="password" name="password" type="password" placeholder='Contraseña'/>
     {errors.password && <p>La contraseña ingreada no es valida</p> } 
      </div>
      <p>¿No tienes cuenta?</p><Link to='/register'>Registrate</Link>
      <button type="submit">Ingresar</button>
    </form>
    </div>
  );
}

export default Ingresar;