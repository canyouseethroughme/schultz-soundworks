export type Article = {
    id: string;
    title: string;
    createdAt: string;
    link?: string;
    img: {
        url: string;
        width: number;
        height: number;
    };
    text: {
        html: React.ReactNode;
    };
}

export async function getArticle(id: string): Promise<Article> {
    const endpoint = process.env.NEXT_HYGRAPH_ENDPOINT;
    if (!endpoint) {
        throw new Error("NEXT_HYGRAPH_ENDPOINT is not defined");
    }
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    const response = await fetch(endpoint, {
        method: "POST",
        cache: "force-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `query Article {
                        article(where: {id: "${id}"}) {
                            createdAt
                            link
                            title
                            text {
                              html
                            }
                            img {
                              url
                              width
                              height
                            }
                        }
                    }`,
        }),
    });

    const data = await response.json();
    return data.data.article

}