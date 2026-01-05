import { Link } from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <>
            <h1 className="text-3xl font-bold text-center">Hello</h1>

            <div>
                {posts.data.map((post) => (
                    <div
                        key={post.id}
                        className="border-b border-gray-300 py-4 p-4"
                    >
                        <div className="text-sm text-slate-600">
                            <span>Posted on:</span>
                            <span>
                                {new Date(post.created_at).toLocaleString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.url
                            ? link.url
                            : "#"
                        }
                        className={`mx-1 px-3 py-2 border rounded-md ${
                            link.active
                                ? "bg-blue-500 text-white border-blue-500"
                                : "bg-white text-blue-500 border-blue-500"
                        } ${!link.url && "pointer-events-none opacity-50"}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        // className="p-1 mx-1"
                    />
                ))}
            </div>
        </>
    );
}