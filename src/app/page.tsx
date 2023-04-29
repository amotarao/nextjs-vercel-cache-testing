import { apiRequest } from '@my-app/contentful-client';
import Link from 'next/link';

export default async function Home() {
  const data = await apiRequest();
  console.log(`Data generated on build for language: `, data);
  return (
    <main>
      <h1>{data}</h1>
    </main>
  )
}
