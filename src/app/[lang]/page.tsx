import { request } from '@my-app/contentful-client';
import styles from './page.module.css'

const Locales = [
  'de',
  'en',
]

export async function generateStaticParams() {
  return Locales.map(lang => ({ lang }));
}

export default async function Home() {
  const data = await request();
  return (
    <main className={styles.main}>
      <h1>{data.testingCollection.items[0].headline}</h1>
    </main>
  )
}
