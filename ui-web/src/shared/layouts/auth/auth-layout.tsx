import React, { PropsWithChildren } from 'react'
import './auth-layout.scss';
import { imagePath } from '../../../helpers/assetsHelper';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

export default function AuthLayout(props: PropsWithChildren<{}>) {
    return (
        <div id="parent">
            <div id="auth-background">
                <img id="side-image" src={imagePath('project_team.svg')} alt="" />
            </div>
            <div className="d-flex align-items-center" id="auth-content">
                <div id="auth-form" className="px-4 pb-4 px-sm-5 pb-sm-5">
                    <div className="mb-5">
                        <Link to={ROUTES.HOME}><img id="auth-logo" src={imagePath('logo.svg')} alt="" /></Link>
                    </div>

                    {props.children}
                </div>
            </div>
        </div>
    )
}
