import * as React from 'react'
import {graphql, Link} from 'gatsby'
import {
    emptyPosts,
    postExcerpt,
    postList,
    postMeta,
    postSummary,
    postTitle,
    postTitleLink
} from '../styles/layout.css'

export type PostSummary = {
    id: string
    excerpt: string
    path: string
    frontmatter: {
        title: string
        date: string
        isoDate: string
    }
}

interface Props {
    posts: PostSummary[]
    headingLevel?: 2 | 3
}

const PostList = ({posts, headingLevel = 2}: Props) => {
    const Heading = headingLevel === 3 ? 'h3' : 'h2'

    return (
        <div className={postList}>
            {posts.length === 0 ? (
                <p className={emptyPosts}>No posts yet.</p>
            ) : posts.map(({id, excerpt, frontmatter, path}) => (
                <article key={id} className={postSummary}>
                    <Heading className={postTitle}>
                        <Link to={path} className={postTitleLink}>
                            {frontmatter.title}
                        </Link>
                    </Heading>
                    <p className={postMeta}>
                        <time dateTime={frontmatter.isoDate}>{frontmatter.date}</time>
                    </p>
                    <p className={postExcerpt}>{excerpt}</p>
                </article>
            ))}
        </div>
    )
}

export const postListFields = graphql`
    fragment PostListFields on Mdx {
        id
        excerpt(pruneLength: 70)
        path: gatsbyPath(filePath: "/blog/{mdx.frontmatter__slug}")
        frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            isoDate: date(formatString: "YYYY-MM-DD")
        }
    }
`

export default PostList
