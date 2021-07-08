import React from 'react'
import { useForm } from "react-hook-form";
import './styles.css'

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <>
            <h2>Register</h2>
            <div >
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <label><h4>Username</h4>
                        <input {...register("username", { required: true, maxLength: 10, minLength: 3 })} placeholder="username" />
                        <p>
                            {errors.username?.type === "required" && "First name is required!"}
                            {errors.username?.type === "minLength" && "Minimum three characters!"}
                            {errors.username?.type === "maxLength" && "Maximum ten characters!"}
                        </p>
                    </label>
                    <label><h4>Password</h4>
                        <input {...register("password", { required: true, maxLength: 10, minLength: 3 })} placeholder="password" />
                        <p>
                            {errors.password?.type === "required" && "Password is required!"}
                            {errors.password?.type === "minLength" && "Minimum three characters!"}
                            {errors.password?.type === "maxLength" && "Maximum ten characters!"}
                        </p>
                    </label>
                    <button className="btn-submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default RegisterForm