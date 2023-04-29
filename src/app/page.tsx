import { request } from '@my-app/contentful-client';
import Link from 'next/link';

export default async function Home() {
  const data = await request();
  console.log(`Data generated on build for language: `, data.testingCollection.items);
  return (
    <main>
      <h1>{data.testingCollection.items[0].headline}</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a href={`/`}>Full reload of page</a>
        <Link href={`/`}>NextJS link to /</Link>
      </div>
    </main>
  )
}
