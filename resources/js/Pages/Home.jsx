import { Link } from "@inertiajs/react";

export default function Home({ name }) {
    return (
        <>
            <h1 className="text-3xl font-bold">Hello {name}</h1>

            <Link preserveScroll href="/" className="block mt-[100] title-font text-2xl">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    )
}