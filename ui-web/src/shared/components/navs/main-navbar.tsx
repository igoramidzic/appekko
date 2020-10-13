import React from 'react'
import { Link } from 'react-router-dom'
import { imagePath } from '../../../helpers/assetsHelper'
import './main-navbar.scss';
import AppStatus from '../app-status/app-status';

export default function MainNavbar() {
    return (
        <nav className="py-2 d-flex align-items-center justify-content-between">
            <div>
                <Link to="/"><img id="main-navbar-logo" src={imagePath('logo.svg')} alt="" /></Link>
            </div>
            <div>
                <AppStatus></AppStatus>
            </div>
            <div>
                <Link className="btn btn-sm" to="/">Feed</Link>
            </div>
        </nav>
    )
}
