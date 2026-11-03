import {globalStyle, style} from '@vanilla-extract/css'

const colors = {
    background: '#faf9f6',
    text: '#20252b',
    secondary: '#53646a',
    accent: '#24536a',
    border: '#d7ddda',
    codeBackground: '#efeee9'
}

const headingFont = 'Georgia, Cambria, "Times New Roman", serif'

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box'
})

globalStyle('body', {
    margin: 0,
    background: colors.background,
    color: colors.text,
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '1.0625rem',
    lineHeight: 1.7,
    overflowWrap: 'break-word'
})

globalStyle('a', {
    color: colors.accent,
    textUnderlineOffset: '0.2em'
})

globalStyle('a:focus-visible', {
    outline: `2px solid ${colors.accent}`,
    outlineOffset: '4px'
})

globalStyle('img', {
    maxWidth: '100%',
    height: 'auto'
})

export const skipLink = style({
    position: 'fixed',
    top: '1rem',
    left: '1rem',
    zIndex: 10,
    padding: '0.5rem 0.75rem',
    background: colors.text,
    color: colors.background,
    transform: 'translateY(-200%)',
    selectors: {
        '&:focus': {
            transform: 'translateY(0)',
            outlineColor: colors.background
        }
    }
})

export const site = style({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
})

export const siteHeader = style({
    borderBottom: `1px solid ${colors.border}`
})

export const headerInner = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    maxWidth: '72rem',
    margin: '0 auto',
    padding: '1.25rem clamp(1.25rem, 4vw, 3rem)',
    '@media': {
        'screen and (max-width: 480px)': {
            alignItems: 'flex-start',
            flexDirection: 'column',
            gap: '0.75rem'
        }
    }
})

export const siteName = style({
    color: colors.text,
    fontFamily: headingFont,
    fontSize: '1.5rem',
    fontWeight: 700,
    letterSpacing: '-0.035em',
    lineHeight: 1.2,
    textDecoration: 'none',
    selectors: {
        '&:hover': {
            color: colors.accent
        }
    }
})

export const navLinks = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0 clamp(1.25rem, 3vw, 2rem)',
    margin: 0,
    padding: 0,
    listStyle: 'none'
})

export const navLink = style({
    display: 'inline-block',
    padding: '0.35rem 0',
    borderBottom: '2px solid transparent',
    color: colors.secondary,
    fontSize: '0.9375rem',
    fontWeight: 500,
    textDecoration: 'none',
    selectors: {
        '&:hover': {
            color: colors.accent
        }
    }
})

export const activeNavLink = style({
    borderBottomColor: colors.accent,
    color: colors.text
})

export const main = style({
    flex: '1 0 auto',
    width: '100%',
    maxWidth: '74ch',
    margin: '0 auto',
    padding: 'clamp(4rem, 8vw, 6.5rem) 1.25rem 6rem'
})

export const pageTitle = style({
    margin: '0 0 2rem',
    fontFamily: headingFont,
    fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
    fontWeight: 400,
    letterSpacing: '-0.035em',
    lineHeight: 1.1,
    overflowWrap: 'anywhere'
})

export const intro = style({
    maxWidth: '60ch',
    fontSize: '1.125rem'
})

export const recentPosts = style({
    marginTop: 'clamp(4rem, 8vw, 6rem)'
})

export const sectionHeader = style({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: '0.5rem 1.5rem',
    marginBottom: '1.25rem'
})

export const sectionTitle = style({
    margin: 0,
    fontFamily: headingFont,
    fontSize: '1.625rem',
    fontWeight: 400,
    lineHeight: 1.2
})

export const sectionLink = style({
    fontSize: '0.9375rem',
    fontWeight: 500
})

export const postList = style({
    borderTop: `1px solid ${colors.border}`
})

export const postSummary = style({
    padding: '1.75rem 0 2rem',
    borderBottom: `1px solid ${colors.border}`
})

export const postTitle = style({
    margin: 0,
    fontFamily: headingFont,
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 400,
    lineHeight: 1.2
})

export const postTitleLink = style({
    color: colors.text,
    textDecorationColor: colors.accent,
    textDecorationThickness: '1px',
    selectors: {
        '&:hover': {
            color: colors.accent,
            textDecorationColor: colors.accent
        }
    }
})

export const postMeta = style({
    margin: '0.55rem 0 0',
    color: colors.secondary,
    fontSize: '0.875rem'
})

export const postExcerpt = style({
    maxWidth: '65ch',
    margin: '0.9rem 0 0'
})

export const emptyPosts = style({
    margin: 0,
    padding: '1.75rem 0',
    color: colors.secondary
})

export const articleMeta = style({
    margin: '-0.75rem 0 2.5rem',
    color: colors.secondary,
    fontSize: '0.9375rem'
})

export const articleBody = style({
    maxWidth: '70ch'
})

globalStyle(`${articleBody} > *:first-child`, {
    marginTop: 0
})

globalStyle(`${articleBody} p, ${articleBody} ul, ${articleBody} ol`, {
    marginBottom: '1.5rem'
})

globalStyle(`${articleBody} h2, ${articleBody} h3`, {
    margin: '2.5rem 0 1rem',
    fontFamily: headingFont,
    fontWeight: 400,
    lineHeight: 1.2
})

globalStyle(`${articleBody} pre`, {
    overflowX: 'auto',
    padding: '1rem',
    background: colors.codeBackground
})

export const articleBackLink = style({
    display: 'inline-block',
    marginTop: '2.5rem',
    fontSize: '0.9375rem',
    fontWeight: 500
})

export const siteFooter = style({
    borderTop: `1px solid ${colors.border}`
})

export const footerInner = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '0.5rem 1.5rem',
    maxWidth: '72rem',
    margin: '0 auto',
    padding: '1.5rem clamp(1.25rem, 4vw, 3rem)',
    color: colors.secondary,
    fontSize: '0.875rem'
})

export const footerName = style({
    color: colors.text,
    fontFamily: headingFont,
    fontWeight: 700
})
