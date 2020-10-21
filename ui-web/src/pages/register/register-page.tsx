import React, { Component } from 'react'
import AuthLayout from '../../shared/layouts/auth/auth-layout';
import RegisterForm from '../../shared/components/auth/register-form/register-form';
import GoogleAuth from '../../shared/components/auth/google-auth/google-auth';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export default function RegisterPage() {

    const history = useHistory();

    function onSuccessGoogle() {
        history.push(ROUTES.HOME);
    }

    return (
        <div className="auth-form">
            <AuthLayout>
                <h2 className="mb-5">Sign Up</h2>
                <GoogleAuth onSuccess={onSuccessGoogle}></GoogleAuth>
                <hr className="my-4" />
                <RegisterForm></RegisterForm>
            </AuthLayout>
        </div>
    )
}
