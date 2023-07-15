import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! My name is Chobbs and I'm the proud creator of this site, which I built using Gatsby.</p>    
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage

