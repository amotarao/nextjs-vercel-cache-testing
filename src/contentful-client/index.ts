const testingQuery = `
    query testingData {
        testingCollection {
            items {
                headline
            }
        }
    }
`;

export async function request(): Promise<any> {
    const spaceId = process.env.CONTENTFUL_SPACE;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            testingQuery,
        }),
    });

    const json = await res.json();
    return json.data;
}
