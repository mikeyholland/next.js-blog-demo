import Link from 'next/link'

import PostPreview from '../components/post-preview'

export default function RelatedPosts({ posts }) {
  return (
    <aside>
      <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        Related Posts
      </h2>
      <div className="mb-32">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-10 md:gap-y-16">  
          {posts.map(({ slug, title, author: { name } }) => (
            <li className="mb-6">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline text-2xl md:text-3xl">
                  {title}
                </a>
              </Link>
              <p className="mt-4">{name}</p>
            </li>
          ))}  
        </ul>
      </div>
    </aside>
  )
}
