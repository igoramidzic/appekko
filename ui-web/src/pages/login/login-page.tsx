import React, { Component } from 'react'
import LoginForm from '../../shared/components/auth/login-form/login-form'
import AuthLayout from '../../shared/layouts/auth/auth-layout'

export default class LoginPage extends Component {
    render() {
        return (
            <AuthLayout>
                <h2 className="mb-5">Log In</h2>
                <LoginForm></LoginForm>
            </AuthLayout>
        )
    }
}
