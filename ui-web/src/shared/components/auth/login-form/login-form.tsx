import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../../../context/firebase';
import { ROUTES } from '../../../../constants/routes';
import MainSpinner from '../../spinners/main-spinner';
import { EFirebaseAuthErrorCode } from '../../../../core/enums/firebase';

type LoginFormData = {
    fullName: string;
    email: string;
    password: string;
};

export default function LoginForm() {
    const firebase = useContext(FirebaseContext);
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { register, handleSubmit, formState } = useForm<LoginFormData>();
    const { isSubmitting } = formState;
    const onSubmit = (async (data: LoginFormData) => {
        setErrorMessage(null);
        try {
            await firebase.auth?.signInWithEmailAndPassword(data.email, data.password);
            history.push(ROUTES.HOME);
        } catch (e) {
            setErrorMessage(getErrorMessage(e.code));
        }
    });

    function getErrorMessage(code: EFirebaseAuthErrorCode): string {
        switch (code) {
            case EFirebaseAuthErrorCode.INVALID_EMAIL:
            case EFirebaseAuthErrorCode.INVALID_PASSWORD:
            case EFirebaseAuthErrorCode.WRONG_PASSWORD:
                return 'Incorrect email or password.';
            default:
                return 'Something went wrong. Please try again.';
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input name="email" disabled={isSubmitting} type="text" className="input-lg" ref={register()} />
                </div>

                <div className="mb-5">
                    <label htmlFor="password">Password</label>
                    <input name="password" disabled={isSubmitting} type="password" className="input-lg" ref={register()} />
                </div>

                {!!errorMessage && <div className="mb-4 alert alert-danger">{errorMessage}</div>}

                <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg btn-block mb-3">
                    {!isSubmitting && 'Log in'}
                    {!!isSubmitting && <MainSpinner></MainSpinner>}
                </button>

                <p className="mb-0">Don't have an account? <Link to="register">Sign up</Link></p>
            </form>
        </div>
    )
}