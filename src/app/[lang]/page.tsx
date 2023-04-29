import { request } from '@my-app/contentful-client';
import Link from 'next/link';

const Locales = [
  'de',
  'en',
]

export async function generateStaticParams() {
  return Locales.map(lang => ({ lang }));
}

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const data = await request(lang);
  console.log(`Data generated on build for language ${lang} `, data.testingCollection.items);
  return (
    <main>
      <h1>{data.testingCollection.items[0].headline}</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <a href={`/de`}>Full reload of DE page</a>
        <a href={`/en`}>Full reload of EN page</a>
        <Link href={`/de`}>NextJS link to /de</Link>
        <Link href={`/en`}>NextJS link to /en</Link>
      </div>
    </main>
  )
}
