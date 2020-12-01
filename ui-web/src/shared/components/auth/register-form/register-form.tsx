import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import { FirebaseContext } from '../../../../context/firebase';
import { EFirebaseAuthErrorCode } from '../../../../core/enums/firebase';
import MainSpinner from '../../spinners/main-spinner';

type RegisterFormData = {
    fullName: string;
    email: string;
    password: string;
};

export default function RegisterForm() {
    const f = useContext(FirebaseContext);
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { register, handleSubmit, errors, formState } = useForm<RegisterFormData>();
    const { isSubmitting } = formState;

    const onSubmit = handleSubmit(async (data: RegisterFormData, e: any) => {
        // Reset error message on form submit
        setErrorMessage(null);

        try {
            let res = await f.auth?.createUserWithEmailAndPassword(data.email, data.password);
            if (!res.user) throw Error("Something went wrong.");
            await res.user.updateProfile({ displayName: data.fullName });
            await f.firestore.collection('users').doc(res.user.uid).set({ fullName: data.fullName });
            history.push(ROUTES.HOME);
        } catch (e) {
            setErrorMessage(getRegisterErrorMessage(e.code));
        }
    });

    function getRegisterErrorMessage(code: string): string {
        switch (code) {
            case EFirebaseAuthErrorCode.EMAIL_ALREADY_EXISTS:
            case EFirebaseAuthErrorCode.EMAIL_ALREADY_IN_USE:
                return 'This email is already taken.';
            case EFirebaseAuthErrorCode.INVALID_EMAIL:
                return 'This email is invalid.';
            case EFirebaseAuthErrorCode.INVALID_PASSWORD:
                return 'This password is invalid.';
            default:
                return 'Something went wrong. Please try again.';
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="fullName">Full Name</label>
                    <input name="fullName" disabled={formState.isSubmitting} type="text" className="input-lg" ref={register({ required: true })} />
                    <span className="hint danger">{errors.fullName && "First name is required"}</span>
                </div>

                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input name="email" disabled={isSubmitting} type="email" className="input-lg" ref={register({ required: true, })} />
                    <span className="hint danger">{errors.email && " Required"}</span>
                </div>

                <div className="mb-5">
                    <label htmlFor="password">Password</label>
                    <input name="password" disabled={isSubmitting} type="password" className="input-lg" ref={register({ required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ })} />
                    <span className={`hint ${errors.password ? 'danger' : ''}`}>8+ characters, 1 number, 1 special character</span>
                </div>

                {errorMessage && <div className="alert alert-danger mb-4">{errorMessage}</div>}

                <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg btn-block mb-3">
                    {!isSubmitting && 'Sign Up'}
                    {!!isSubmitting && <MainSpinner></MainSpinner>}
                </button>

                <p className="mb-0">Don't have an account? <Link to="login">Log in</Link></p>
            </form>
        </div>
    )
}