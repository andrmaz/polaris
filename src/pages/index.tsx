import * as React from 'react'
import {graphql, Link} from 'gatsby'
import type {PageProps} from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import type {PostSummary} from '../components/post-list'
import Seo from '../components/seo'
import {recentPosts, sectionHeader, sectionLink, sectionTitle} from '../styles/layout.css'

type DataProps = {
    allMdx: {
        nodes: PostSummary[]
    }
}

const IndexPage = ({data}: PageProps<DataProps>) => {
    return (
        <Layout pageTitle="Welcome to my blog!">
            <section className={recentPosts} aria-labelledby="recent-posts-title">
                <div className={sectionHeader}>
                    <h2 id="recent-posts-title" className={sectionTitle}>Recent posts</h2>
                    <Link to="/blog/" className={sectionLink}>View all posts</Link>
                </div>
                <PostList posts={data.allMdx.nodes} headingLevel={3}/>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query HomePosts {
        allMdx(sort: {frontmatter: {date: DESC}}, limit: 3) {
            nodes {
                ...PostListFields
            }
        }
    }
`

export const Head = () => <Seo title="Home Page"/>

export default IndexPage
