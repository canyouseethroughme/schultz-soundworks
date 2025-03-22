import { getArticle } from "@/app/api/get-article/getArticle"
import Link from "next/link";
import Image from "next/image"
import { formatDateTime } from "@/app/utils/utils";

import BackButton from "@/app/ui/components/BackButton";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const article = await getArticle(slug)
    const { time, date } = formatDateTime(article.createdAt)

    return (
        <div key={article.id} className="p-2 sm:p-0">
            <BackButton/>

            <h1 className="text-xl sm:text-3xl font-extrabold leading-none sm:w-[40rem] sm:text-center mb-8 sm:mb-12">{article.title}</h1>

            <Image
                className="object-fill sm:object-cover sm:w-[40rem] pb-2"
                src={article.img.url}
                alt={article.title}
                width={article.img.width}
                height={article.img.height}
                priority
                unoptimized
            />

            <h2 className="text-xs sm:text-m mb-8 sm:mb-12 text-zinc-400">Posted on {date} @ {time}</h2>

            <div className="sm:w-[40rem] mb-8 sm:mb-12 dangerouslySetAnchorTags" dangerouslySetInnerHTML={{ __html: article.text.html || "" }} />

            {article.link &&
                <Link
                    className="text-m sm:text-xl font-bold hover:text-yellow-300 hover:underline"
                    href={article.link}
                    target="_blank">
                    read more
                </Link>
            }
        </div>
    )
}