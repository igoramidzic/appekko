import React, { Component } from 'react'
import GoogleAuth from '../../shared/components/auth/google-auth/google-auth'
import LoginForm from '../../shared/components/auth/login-form/login-form'
import AuthLayout from '../../shared/layouts/auth/auth-layout'
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export default function LoginPage() {
    const history = useHistory()

    function onSuccessGoogle() {
        history.push(ROUTES.HOME)
    }

    return (
        <AuthLayout>
            <h2 className="mb-5">Log In</h2>
            <GoogleAuth onSuccess={onSuccessGoogle}></GoogleAuth>
            <hr className="my-4" />
            <LoginForm></LoginForm>
        </AuthLayout>
    )
}
