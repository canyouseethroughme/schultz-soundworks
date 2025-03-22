export const ArticleSkeleton = () => {
    return (
        <div className="p-2 sm:p-0">
               <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[2rem] h-4 sm:w-[10rem] sm:h-6 mb-8`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[65vw] h-8 sm:w-[40rem] sm:h-12 mb-8 sm:mb-12`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500  w-[95vw] h-[15rem] sm:w-[40rem] sm:h-[20rem] mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[4rem] h-2 sm:w-[10rem] sm:h-4 mb-12`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[95vw] sm:w-[40rem] sm:h-6 mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[95vw] sm:w-[40rem] sm:h-6 mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[95vw] sm:w-[40rem] sm:h-6 mb-2`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[95vw] sm:w-[40rem] sm:h-6 mb-12`}>
                <div className="invisible">Loading...</div>
            </div>

            <div className={`animate-pulse rounded-lg bg-gradient-to-r from-neutral-500 via-neutral-700 to-neutral-500 w-[2rem] h-4 sm:w-[10rem] sm:h-6`}>
                <div className="invisible">Loading...</div>
            </div>
        </div>
    );
}