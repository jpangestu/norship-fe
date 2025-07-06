"use server";

import { redirect } from 'next/navigation';

export async function signup(prevState: any, formData: FormData) {

    const first_name = formData.get('first_name') as string;
    const last_name = formData.get('last_name') as string;
    const phone_number = formData.get('phone_number') as string;
    const username = formData.get('username') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: { _form: ['Email and password are required.'] } };
    }

    try {
        const response = await fetch(
            "http://localhost:8000/api/v1/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ first_name, last_name, phone_number, username, email, password })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return { error: { _form: [data.message || 'Sign Up failed.'] } };
        }

    } catch (e: any) {
        return { error: { _form: ['Could not connect to the server.'] } };
    }

    redirect('/');
}