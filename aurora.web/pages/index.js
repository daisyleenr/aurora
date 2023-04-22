import Head from 'next/head'
import Link from "next/link";

const posts = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
]
export default function Home() {
  return (
    <>
      <Head>
        <title>Aurora</title>
        <meta name="description" content="Simple board project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`/`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}
