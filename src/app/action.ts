"use server";


import { redirect } from 'next/navigation';
import { getSession } from './lib/session';

export async function getDatas() {
    const session = await getSession();

    if (!session) {
        redirect('/login');
    }

    try {
        const response = await fetch(
            "http://localhost:8000/api/v1/products",
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${session.token}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                credentials: "include",
            }
        );

        const data = await response.json();
        return data;

    } catch (e: any) {
        return { error: { _form: ['Could not connect to the server.'] } };
    }
}