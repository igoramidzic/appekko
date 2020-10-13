import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type LoginFormData = {
    fullName: string;
    email: string;
    password: string;
};

export default function LoginForm() {
    const [submitting, setSubmitting] = useState(false);

    const { register, handleSubmit } = useForm<LoginFormData>();
    const onSubmit = handleSubmit((data: LoginFormData) => {
        console.log("Form submitted", data);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input name="email" disabled={submitting} type="text" className="input-lg" ref={register({ required: true, })} />
                </div>

                <div className="mb-5">
                    <label htmlFor="password">Password</label>
                    <input name="password" disabled={submitting} type="password" className="input-lg" ref={register({ required: true })} />
                </div>

                <button type="submit" disabled={submitting} className="btn btn-primary btn-lg btn-block mb-3">Log in</button>

                <p className="mb-0">Don't have an account? <Link to="register">Sign up</Link></p>
            </form>
        </div>
    )
}