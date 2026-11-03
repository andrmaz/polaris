import * as React from 'react'
import {Link} from 'gatsby'
import type {PageProps} from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {intro} from '../styles/layout.css'

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="Page not found">
            <p className={intro}>Sorry, we couldn't find what you were looking for.</p>
            {process.env.NODE_ENV === 'development' ? (
                <p>Try creating a page in <code>src/pages/</code>.</p>
            ) : null}
            <p><Link to="/">Go home</Link>.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Not found"/>

export default NotFoundPage
