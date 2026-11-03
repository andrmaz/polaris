import * as React from 'react'
import {graphql, Link} from 'gatsby'
import type {HeadProps, PageProps} from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {articleBackLink, articleBody, articleMeta} from '../../styles/layout.css'

type DataProps = {
    mdx: {
        frontmatter: {
            title: string
            date: string
            isoDate: string
        }
    }
}

const BlogPost = ({data, children}: PageProps<DataProps>) => {
    const {title, date, isoDate} = data.mdx.frontmatter

    return (
        <Layout pageTitle={title}>
            <p className={articleMeta}><time dateTime={isoDate}>{date}</time></p>
            <div className={articleBody}>{children}</div>
            <Link to="/blog/" className={articleBackLink}>Back to all posts</Link>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                isoDate: date(formatString: "YYYY-MM-DD")
            }
        }
    }
`

export const Head = ({data}: HeadProps<DataProps>) => <Seo title={data.mdx.frontmatter.title}/>

export default BlogPost
