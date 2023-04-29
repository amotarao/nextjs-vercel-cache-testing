import { gql } from 'graphql-request';

const testingQueryWithLang = gql`
    query testingData($locale: String!) {
        testingCollection(locale: $locale) {
            items {
                headline
            }
        }
    }
`;

const testingQuery = gql`
    query testingData {
        testingCollection {
            items {
                headline
            }
        }
    }
`;

export async function graphqlRequest(): Promise<any> {
    const spaceId = process.env.CONTENTFUL_SPACE;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;
    // const contentfulLocale = lang === 'de' ? 'de' : 'en-US';

    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            query: testingQuery,
            // variables: { locale: contentfulLocale },
        }),
    });

    const json = await res.json();
    return json.data.testingCollection.items[0].headline;
}

export async function apiRequest(): Promise<any> {
    const spaceId = process.env.CONTENTFUL_SPACE;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    const endpoint = `https://cdn.contentful.com/spaces/${spaceId}/entries`;

    const res = await fetch(`${endpoint}?access_token=${accessToken}`);
    const json = await res.json();
    return json.items[0].fields.headline;
}
