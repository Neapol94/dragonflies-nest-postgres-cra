import React, { useState } from 'react';
import { User } from '../../interfaces/User';
import { useForm } from 'react-hook-form';
import { getListOfAllUsers } from '../../services/users.service';
import './LoginPage.scss';

const LoginPage = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className='main'>
      <h1>Zaloguj się</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="">Login: <input defaultValue="test" {...register("example")} /></label><br />
        
        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="">Hasło: <input {...register("exampleRequired", { required: true })} /></label>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    </div>
  );
}

export default LoginPage;
