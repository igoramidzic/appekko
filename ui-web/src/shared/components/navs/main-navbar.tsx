import React from 'react'
import { Link } from 'react-router-dom'
import { imagePath } from '../../../helpers/assetsHelper'
import './main-navbar.scss';

export default function MainNavbar() {
    return (
        <nav className="py-2 d-flex align-items-center justify-content-between">
            <div>
                <Link to="/"><img id="main-navbar-logo" src={imagePath('logo.svg')} alt="" /></Link>
            </div>
            <div>
                <Link to="/login" className="btn btn-primary btn-outline btn-sm mr-2">Log in</Link>
                <Link to="/register" className="btn btn-primary btn-sm">Register</Link>
            </div>
        </nav>
    )
}
