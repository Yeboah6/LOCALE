import { useForm } from '@inertiajs/react';

export default function Show({post}) {

    const { delete: destroy } = useForm();

    function handleDelete(e) {
        e.preventDefault();
        destroy(`/posts/${post.id}`);
    }

    return (
        <>
            <h1 className="text-3xl font-bold">{post.body}</h1>

            <div>
                    <div
                        className="border-b border-gray-300 py-4 p-4"
                    >
                        <div className="text-sm text-slate-600">
                            <span>Posted on:</span>
                            <span>
                                {new Date(post.created_at).toLocaleString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>

                        <div className="flex items-center justify-end gap-2">
                            <form onSubmit={handleDelete}>
                                <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
            </div>
        </>
    )
}