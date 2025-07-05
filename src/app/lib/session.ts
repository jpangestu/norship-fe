import { cookies } from 'next/headers';

export async function getSession() {
    const token = (await cookies()).get('session_token')?.value;
    if (!token) return null;
    return { token };
}