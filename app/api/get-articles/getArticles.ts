import { Article } from "../get-article/getArticle";

export async function getArticles(skip: number = 0, first: number = 10): Promise<Article[]> {
    const endpoint = process.env.NEXT_HYGRAPH_ENDPOINT;
    if (!endpoint) {
        throw new Error("NEXT_HYGRAPH_ENDPOINT is not defined");
    }
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `query Articles {
                            articles(skip: ${skip}, first: ${first}) {
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
    return data.data.articles.reverse()

}