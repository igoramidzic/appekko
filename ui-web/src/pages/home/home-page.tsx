import React, { useContext } from 'react';
import ContentLayout from '../../shared/layouts/content/content-layout';
import MainNavbar from '../../shared/components/navs/main-navbar';
import Feed from '../../shared/components/feed/feed';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { FirebaseContext } from '../../context/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function HomePage() {
    return (
        <ContentLayout>
            <div className="content-width container-fluid">
                <div className="mb-4">
                    <MainNavbar></MainNavbar>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <Profile></Profile>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Feed></Feed>
                    </div>
                    {/* <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                Filter
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </ContentLayout>
    )
}

function Profile() {
    const firebase = useContext(FirebaseContext);
    const [user] = useAuthState(firebase.auth);

    // function showLogout(): boolean {
    //     console.log("testing", firebase.auth?.currentUser);
    //     return !!firebase.auth?.currentUser;
    // }

    function logout(): void {
        firebase.auth.signOut();
    }

    return (
        <div>
            {
                !user &&
                <div>
                    <Link to={ROUTES.SIGN_UP} className="btn btn-primary btn-block">Sign up</Link>

                    <hr />

                    <Link to={ROUTES.LOG_IN} className="btn btn-primary btn-block btn-outline">Log in</Link>
                </div>
            }

            {
                !!user &&
                <div>
                    <button className="btn btn-primary btn-block" onClick={logout}>Log Out</button>
                </div>
            }
        </div>
    )
}
