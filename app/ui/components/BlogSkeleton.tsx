export const BlogSkeleton = () => {
    return (
        <div className="p-2 sm:p-0 border-b-[1px] border-neutral-700">
            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[65vw] sm:w-[40rem] sm:h-12 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[95vw] h-[8rem] sm:w-[40rem] sm:h-[15rem] mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[4rem] h-1 sm:w-[10rem] sm:h-4 mb-6`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className="w-[95vw] sm:w-[40rem] flex justify-center">
                <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 text-center w-16 h-4 sm:h-6 mb-6`}>
                    <div className="invisible">Loading...</div>
                </div>
            </div>

        </div>
    );
}