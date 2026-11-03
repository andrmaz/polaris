import * as React from 'react'
import {graphql} from 'gatsby'
import type {PageProps} from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import type {PostSummary} from '../components/post-list'
import Seo from '../components/seo'

type DataProps = {
    allMdx: {
        nodes: PostSummary[]
    }
}

const BlogPage = ({data}: PageProps<DataProps>) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <PostList posts={data.allMdx.nodes}/>
        </Layout>
    )
}

export const query = graphql`
    query BlogPosts {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                ...PostListFields
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage
