import Image from "next/image"
import { getArticles } from "@/app/api/get-articles/getArticles"
import Link from "next/link"
import { formatDateTime } from "../utils/utils"

export default async function Blog() {
    const articles = await getArticles()

    return articles?.map((article) => {
        const { time, date } = formatDateTime(article.createdAt);
        return (
            <div key={article.id} className="p-2 sm:p-0 sm:mb-10 border-b-[1px] border-neutral-700">
                <h1 className="text-xl sm:text-3xl font-extrabold leading-none sm:w-[40rem] sm:text-center pb-6">{article.title}</h1>
                <Link scroll={true} href={`/blog/${article.id}`}>
                    <Image
                        className="object-fill sm:object-cover sm:w-[40rem] pb-2"
                        src={article.img.url}
                        alt={article.title}
                        width={article.img.width}
                        height={article.img.height}
                        priority
                        unoptimized
                    />
                </Link>

                <h2 className="text-xs sm:text-m text-zinc-400">Posted on {date} @ {time}</h2>

                <div className="text-center pt-2 pb-2 sm:pb-4">
                    <Link className="text-m sm:text-xl font-bold hover:text-yellow-300 transition-colors hover:underline" scroll={true} href={`/blog/${article.id}`}>read more</Link>
                </div>
            </div>
        )
    })

}   