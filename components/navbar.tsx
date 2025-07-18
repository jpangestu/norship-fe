import { getSession } from '../src/app/lib/session';
import { logout } from '../src/app/(auth)/logout/action';

export async function Navbar() {
    const session = await getSession();

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href='/'>App</a>
            </div>
            <input type="text" placeholder="Search (undeveloped)" className="input input-bordered w-24 md:w-auto" />
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                    <div className="card-body">
                        <span className="text-lg font-bold">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <a href='/cart' className="btn btn-soft btn-accent btn-block">View cart</a>
                        </div>
                    </div>
                </div>
            </div>
            {session ? (
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar avatar-placeholder">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">Profile <span className="badge">undeveloped</span></a>
                            </li>
                            <li><a className="justify-between">Settings <span className="badge">undeveloped</span> </a></li>
                            <li><form action={logout}>
                                <button type="submit" className="btn-sm">
                                    Logout
                                </button>
                            </form></li>
                        </ul>
                    </div>
                </div>

            ) : (
                <div className="navbar-right">
                    <a className="btn" href='/login'>Login</a>
                    <a className="btn" href='/signup'>SignUp</a>
                </div>
            )}
        </div>
    );
}