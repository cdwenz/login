import React from "react";
import { Link } from "react-router-dom";
import { useForm,Controller } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import {yupResolver}from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField } from "@material-ui/core";
import "./Register.css";

type Data = {
  /*  name:string;
  lastname:string; */
  email: string;
  /* username: string; */
  password: string;
  confirmPassword: string;
};
const schema=Yup.object().shape({
  email:Yup.string().email().required(),
  password:Yup.string().min(8).max(20).required(),
  confirmPassword:Yup.string()
  .required().
  oneOf([Yup.ref('password'),null],'Password must match')
});
function Register() {
  const {
    register,
 
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Data>({resolver:yupResolver(schema)});

  const onSubmit = handleSubmit((data) => {
    /* alert(JSON.stringify(data))  */
    /* alert(register) */
    console.log(data)
    console.log(document.getElementById('password'))  
    axios
      .post("http://localhost:3001/signup", data)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Fuiste registrado con exito",
          icon: "success",
          confirmButtonText: "Ingresa",
        });
        console.log(res);
      })
      .catch((error) => console.log(error.message));
  });
 /*  const validate=(value:string|null)=>{
    if(value===document.getElementById('password':String).value)
  
  }
   */

  return (
    <div className="container">
      <h1>Registrate</h1>
      <form onSubmit={onSubmit}>
        {/* <div>
        <input {...register('name',{ required: true })} id="name" name="name" type="text" placeholder='Nombre'/>
        
      </div>
      <div>
        <input {...register('lastname',{ required: true })} id="lastname" name="lastname" type="text" placeholder='Apellido'/>
        
      </div> */}
        <div>
          {/* <input
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
            id="email"
            name="email"
            type="text"
            placeholder="E-mail"
          />
          {errors.email && <p>Email invalido</p>} */}
          <Controller
          name='email'
          control={control}
            defaultValue="ejemplo@email.com"
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email?.message : ''}
                fullWidth
                margin="dense"
          />)}
          />
        </div>
        {/*  <div>
        <input {...register('username',{ required: true })} id="username" name="username" type="text" placeholder='Usuario'/>
      </div> */}
      <br/>
        <div>
         {/*  <input
            {...register("password", { required: true, minLength: 8 })}
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p>La contraseña debe tener al menos 8 caracteres</p>
          )} */}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password?.message : ''}
                fullWidth
                margin="dense"
              />
            )}
          />
        </div>
        <div>
          {/* <input
            {...register("confirmPassword", {
              required: true,
              minLength: 8,
              
            })}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
          />
          {errors.confirmPassword && <p>Repite la contraseña ingresada</p>} */}
          <br />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Confirm Password"
                variant="outlined"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                fullWidth
                margin="dense"
              />
            )}
          />
        </div>
        <p>¿Ya tienes cuenta?</p>
        <Link to="/logIn">Ingresa</Link>
        <button type="submit" >Registrar</button>
      </form>
    </div>
  );
}

export default Register;
