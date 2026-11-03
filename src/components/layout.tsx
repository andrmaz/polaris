import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import type {PropsWithChildren} from 'react'
import {
    activeNavLink,
    footerInner,
    footerName,
    headerInner,
    main,
    navLink,
    navLinks,
    pageTitle as pageTitleStyle,
    site,
    siteFooter,
    siteHeader,
    siteName,
    skipLink
} from '../styles/layout.css'

interface Props {
    pageTitle: string
}

const Layout = ({pageTitle, children}: PropsWithChildren<Props>) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div className={site}>
            <a className={skipLink} href="#main-content">Skip to content</a>
            <header className={siteHeader}>
                <div className={headerInner}>
                    <Link to="/" className={siteName}>{data.site.siteMetadata.title}</Link>
                    <nav aria-label="Main navigation">
                        <ul className={navLinks}>
                            <li>
                                <Link to="/" className={navLink} activeClassName={activeNavLink}>Home</Link>
                            </li>
                            <li>
                                <Link to="/blog/" className={navLink} activeClassName={activeNavLink} partiallyActive>Posts</Link>
                            </li>
                            <li>
                                <Link to="/about/" className={navLink} activeClassName={activeNavLink}>About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main id="main-content" className={main} tabIndex={-1}>
                <h1 className={pageTitleStyle}>{pageTitle}</h1>
                {children}
            </main>
            <footer className={siteFooter}>
                <div className={footerInner}>
                    <span className={footerName}>{data.site.siteMetadata.title}</span>
                    <span>Personal blog</span>
                </div>
            </footer>
        </div>
    )
}

export default Layout
