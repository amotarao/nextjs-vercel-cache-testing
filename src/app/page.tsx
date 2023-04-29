import { apiRequest } from '@my-app/contentful-client';
import Link from 'next/link';

export default async function Home() {
  const data = await apiRequest();
  console.log(`Data generated on build for language: `, data);
  return (
    <main>
      <h1>{data}</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a href={`/`}>Full reload of page</a>
        <Link href={`/`}>NextJS link to /</Link>
      </div>
    </main>
  )
}
