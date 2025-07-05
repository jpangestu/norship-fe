import Link from 'next/link';
import { getSession } from '../lib/session'; // Assuming lib folder is aliased to @
import { logout } from '../(auth)/logout/action'; // Corrected import path for the logout action

// The Navbar is an async Server Component to securely check the session on the server.
export async function Navbar() {
    const session = await getSession();

    return (
        <nav className="text-white p-4">
            <div className="flex items-center space-x-4">
                {session ? (
                    <>
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                        <form action={logout}>
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium"
                            >
                                Logout
                            </button>
                        </form>

                        <Link href="/loginrequired" className="hover:text-gray-300">Forbidden</Link>
                    </>
                ) : (
                    <>
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                        <Link href="/login" className="hover:text-gray-300">Login</Link>
                        <Link href="/signup" className="hover:text-gray-300">Sign Up</Link>
                        <Link href="/loginrequired" className="hover:text-gray-300">Forbidden</Link>
                    </>
                )}
            </div>
        </nav>
    );
}