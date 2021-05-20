import React from 'react'
import { useForm } from 'react-hook-form'
import '../styles/pagesStyles/loginStyle.css'

export default function App() {
    const { register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input name="user" id="user" type="text" placeholder="user" {...register("Email")}/>
        
            <label>Senha</label>
            <input name="password" id="password" type="password" placeholder="password" {...register("senha")}/>
            
            <input type="submit" />
        </form>
    );
}