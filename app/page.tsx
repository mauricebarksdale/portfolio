import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Maurice Barksdale
      </h1>
      <p className="mb-4">
        {`Hello! I'm a software engineer who studies Computer Science at the University of
        Maryland College Park! I get bored very easily, so I delve into full stack development, ! `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
