import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define path
const protectedRoutes = ['/cart']

export async function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get('session_token')?.value;

    const path = request.nextUrl.pathname;

    // If logged in and trying to access the login page, redirect to home
    if (sessionToken && path == '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If trying to access a protected route without a token, redirect to login
    if (!sessionToken && protectedRoutes.includes(path)) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}