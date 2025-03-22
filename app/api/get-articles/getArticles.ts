import { Article } from "../get-article/getArticle";

export async function getArticles(skip: number = 0): Promise<Article[]> {
    const endpoint = process.env.NEXT_HYGRAPH_ENDPOINT;
    if (!endpoint) {
        throw new Error("NEXT_HYGRAPH_ENDPOINT is not defined");
    }
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(endpoint, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `query Articles {
                            articles(orderBy: createdAt_DESC, skip: ${skip}, first: 100) {
                                id
                                title
                                createdAt
                                img {
                                    url
                                    width
                                    height
                                }
                                text {
                                    html
                                }
                            }
                        }`,
        }),
    });

    const data = await response.json();
    return data.data.articles;

}