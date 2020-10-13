import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type RegisterFormData = {
    fullName: string;
    email: string;
    password: string;
};

export default function RegisterForm() {
    const [submitting, setSubmitting] = useState(false);

    const { register, handleSubmit, errors } = useForm<RegisterFormData>();
    const onSubmit = handleSubmit((data: RegisterFormData) => {
        console.log("Form submitted", data);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="fullName">Full Name</label>
                    <input name="fullName" disabled={submitting} type="text" className="input-lg" ref={register({ required: true })} />
                    <span className="hint danger">{errors.fullName && "First name is required"}</span>
                </div>

                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input name="email" disabled={submitting} type="email" className="input-lg" ref={register({ required: true, })} />
                    <span className="hint">Use your school .edu email for added features.</span>
                    <span className="hint danger">{errors.email && " Required"}</span>
                </div>


                <div className="mb-5">
                    <label htmlFor="password">Password</label>
                    <input name="password" disabled={submitting} type="password" className="input-lg" ref={register({ required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })} />
                    <span className={`hint ${errors.password ? 'danger' : ''}`}>8+ characters, 1 number, 1 special character</span>
                </div>

                <button type="submit" disabled={submitting} className="btn btn-primary btn-lg btn-block mb-3">Sign Up</button>

                <p className="mb-0">Don't have an account? <Link to="login">Log in</Link></p>
            </form>
        </div>
    )
}