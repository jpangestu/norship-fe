import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get('session_token')?.value;

    const { pathname } = request.nextUrl;

    // If trying to access a protected route without a token, redirect to login
    if (!sessionToken && pathname.startsWith('/loginrequired')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // If logged in and trying to access the login page, redirect to dashboard
    if (sessionToken && pathname === '/login') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}