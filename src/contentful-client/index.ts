export async function apiRequest(): Promise<any> {
    const spaceId = process.env.CONTENTFUL_SPACE;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    const endpoint = `https://cdn.contentful.com/spaces/${spaceId}/entries`;

    const res = await fetch(`${endpoint}?access_token=${accessToken}`);
    const json = await res.json();
    return json.items[0].fields.headline;
}

export async function pokemonRequest(): Promise<any> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const json = await res.json();
    return json.name;
}
