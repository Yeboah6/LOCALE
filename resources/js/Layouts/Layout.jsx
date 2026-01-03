import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">LOCALE</h1>
                </div>

                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/create">Create</Link>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}