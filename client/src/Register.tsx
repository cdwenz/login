import React from "react";
import { useForm } from 'react-hook-form'
import "./Register.css";

type Data = {
  name:string;
  lastname:string;
  email:string;
  username: string;
  password: string;
  confirmPassword:string;
}

function Register() {
  const {register, handleSubmit} = useForm<Data>()

  const onSubmit = handleSubmit((data) => {
    /* alert(JSON.stringify(data)) */
    alert(register)
  })

  return (
  <div className='container'>
    <h1>Registrate</h1>
    <form onSubmit={onSubmit}>
      {/* <div>
        <input {...register('name',{ required: true })} id="name" name="name" type="text" placeholder='Nombre'/>
        
      </div>
      <div>
        <input {...register('lastname',{ required: true })} id="lastname" name="lastname" type="text" placeholder='Apellido'/>
        
      </div> */}
      <div>
        <input {...register('email',{ required: true , pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g},)} id="email" name="email" type="text" placeholder='E-mail'/>
      </div>
     {/*  <div>
        <input {...register('username',{ required: true })} id="username" name="username" type="text" placeholder='Usuario'/>
      </div> */}
      <div>
        <input {...register('password',{ required: true })} id="password" name="password" type="password" placeholder='Contraseña'/>
      </div>
      <div>
        <input {...register('confirmPassword',{ required: true })} id="confirmPassword" name="confirmPassword" type="password" placeholder='Confirmar contraseña'/>
      </div>
      <p>¿Ya tienes cuenta?</p>
      <button type="submit">Registrar</button>

    </form>
    </div>
  );
}

export default Register;