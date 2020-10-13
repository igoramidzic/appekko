import React, { Component } from 'react'
import AuthLayout from '../../shared/layouts/auth/auth-layout';
import RegisterForm from '../../shared/components/auth/register-form/register-form';

export default class RegisterPage extends Component {
    render() {
        return (
            <div className="auth-form">
                <AuthLayout>
                    <h2 className="mb-5">Sign Up</h2>
                    <RegisterForm></RegisterForm>
                </AuthLayout>
            </div>
        )
    }
}
