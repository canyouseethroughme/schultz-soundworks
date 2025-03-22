'use client';
import { useRouter } from 'next/navigation';

function BackButton() {
    const router = useRouter();
    return (
        <button className="text-m sm:text-xl font-bold text-zinc-500 hover:text-yellow-300 transition-colors hover:underline mb-8" onClick={() => router.back()}>
            {"<"} go back
        </button>
    );
}

export default BackButton;