"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: { _form: ['Email and password are required.'] } };
    }

    try {
        const response = await fetch(
            "http://localhost:8000/api/v1/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ email, password })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return { error: { _form: [data.message || 'Login failed.'] } };
        }

        const { token } = data;
        if (token) {
            (await cookies()).set('session_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            });
        } else {
            return { error: { _form: ['Login successful, but no token received.'] } };
        }

    } catch (e: any) {
        return { error: { _form: ['Could not connect to the server.'] } };
    }

    redirect('/');
}