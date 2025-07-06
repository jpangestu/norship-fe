"use client";

import { useActionState, useEffect, useState } from "react";
import { login } from "./action";

export default function Login() {
    const [state, loginAction] = useActionState(login, undefined);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (state?.error?._form) {
            setShowAlert(true);

            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [state]);

    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center gap-4 p-4">
            {state?.error?._form && (
                <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{state.error._form.join(', ')}</span>
                </div>
            )}
            <form action={loginAction}>
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 gap-4">
                    <legend className="fieldset-legend">Login</legend>
                    <div>
                        <label className="label">Email</label>
                        <input name="email" className="input validator" type="email" required placeholder="mail@site.com" />
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>

                    <div>
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required />

                    </div>

                    <div>
                        <button type="submit" className="btn btn-neutral w-full">
                            Login
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}