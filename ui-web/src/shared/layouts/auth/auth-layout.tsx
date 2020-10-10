import React, { Component } from 'react'
import './auth-layout.scss';
import { imagePath } from '../../../helpers/assetsHelper';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
}

interface AuthLayoutState {
}

export default class AuthLayout extends Component<AuthLayoutProps, AuthLayoutState> {

    constructor(props: AuthLayoutProps | Readonly<AuthLayoutProps>) {
        super(props)

        this.state = {
        }
    }


    render() {
        return (
            <div id="parent">
                <div id="auth-background">
                    <img id="side-image" src={imagePath('project_team.svg')} alt="" />
                </div>
                <div id="auth-content">
                    <div id="auth-form" className="px-4 pb-4 px-sm-5 pb-sm-5">
                        <div className="mb-5">
                            <Link to="/"><img id="logo" src={imagePath('logo.svg')} alt="" /></Link>
                        </div>

                        {this.props.children}
                    </div>
                </div>

            </div>
        )
    }
}

