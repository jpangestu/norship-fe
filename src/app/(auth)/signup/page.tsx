"use client";

import { useActionState, useEffect, useState } from "react";
import { signup } from "./action";

export default function Login() {
    const [state, loginAction] = useActionState(signup, undefined);
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
          <legend className="fieldset-legend">Sign Up</legend>

          <div>
            <label className="label">Last Name</label>
            <input name="first_name" type="text" className="input" placeholder="First Name" />
          </div>

          <div>
            <label className="label">Last Name</label>
            <input name="last_name" type="text" className="input" placeholder="Last Name (optional)" />
          </div>

          <div>
            <label className="label">Phone Number</label>
            <input name="phone_number" type="tel" className="input validator tabular-nums" required placeholder="Phone"
              pattern="[0-9]*" minLength={8} maxLength={12} title="Must be 10 digits" />
            <p className="validator-hint hidden">Must be 10 digits</p>
          </div>

          <div>
            <label className="label">Username</label>
            <input name="username" type="text" className="input validator" required placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*" minLength={3} maxLength={30} title="Only letters, numbers or dash" />
            <p className="validator-hint hidden">
              Must be 3 to 30 characters
              <br />containing only letters, numbers or dash
            </p>
          </div>

          <div>
            <label className="label">Email</label>
            <input name="email" className="input validator" type="email" required placeholder="mail@site.com" />
            <div className="validator-hint hidden">Enter valid email address</div>
          </div>
          <div>
            <label className="label">Password</label>
            <input name="password" type="password" className="input validator" required placeholder="Password" minLength={6}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 6 characters, including number, lowercase letter, uppercase letter" />
            <p className="validator-hint hidden">
              Must be more than 6 characters, including
              <br />At least one number
              <br />At least one lowercase letter
              <br />At least one uppercase letter
            </p>
          </div>
          <div>
            <button type="submit" className="btn btn-neutral w-full">
              Sign Up
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}