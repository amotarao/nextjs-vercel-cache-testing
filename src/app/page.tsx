import { apiRequest, pokemonRequest, randomRequest } from '@my-app/contentful-client';
import Link from 'next/link';

export default async function Home() {
  const data = await randomRequest();
  console.log(`Data generated on build for languag: `, data);
  return (
    <main>
      <h1>{data}</h1>
    </main>
  )
}
