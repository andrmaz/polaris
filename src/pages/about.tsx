import * as React from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo";
import {
    aboutClosing,
    aboutLead,
    aboutParagraph,
    projectDescription,
    projectIntro,
    projectItem,
    projectLink,
    projectList,
    projectName,
    projectSection
} from "../styles/layout.css";

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p className={aboutLead}>
                Hi, I'm Andrea, a TypeScript developer interested in building useful software at the
                intersection of AI tooling and everyday product experiences. I work on tools that
                help AI applications use relevant knowledge and coordinate multi-agent workflows,
                as well as TypeScript libraries that make those applications easier to build.
            </p>
            <p className={aboutParagraph}>
                I also enjoy creating product apps for practical needs, including personal finance,
                training monitoring, and team scheduling. I work mainly with TypeScript and
                JavaScript, and build for web and mobile with React and React Native. I'm currently
                practicing with Expo and learning Rust and Mastra.
            </p>
            <section className={projectSection} aria-label="Public projects">
                <p className={projectIntro}>
                    Open source is an important part of how I learn and build, and I'm always glad
                    to collaborate with others. My public projects include:
                </p>
                <ul className={projectList}>
                    <li className={projectItem}>
                        <a className={projectLink} href="https://github.com/andrmaz/cortex">
                            <span className={projectName}>Cortex</span>
                            <span className={projectDescription}>
                                Organizational knowledge retrieval for AI tools
                            </span>
                        </a>
                    </li>
                    <li className={projectItem}>
                        <a className={projectLink} href="https://github.com/andrmaz/swarm">
                            <span className={projectName}>Swarm</span>
                            <span className={projectDescription}>
                                A multi-agent orchestrator for issue management
                            </span>
                        </a>
                    </li>
                    <li className={projectItem}>
                        <a className={projectLink} href="https://github.com/andrmaz/kaizen">
                            <span className={projectName}>Kaizen</span>
                            <span className={projectDescription}>
                                A TypeScript utilities library for AI applications
                            </span>
                        </a>
                    </li>
                    <li className={projectItem}>
                        <a className={projectLink} href="https://github.com/andrmaz/fitbeat">
                            <span className={projectName}>Fitbeat</span>
                            <span className={projectDescription}>A training-monitoring app</span>
                        </a>
                    </li>
                </ul>
            </section>
            <p className={aboutClosing}>
                I'm drawn to thoughtful, practical software and the people building it.
            </p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage