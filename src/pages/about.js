import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! My name is Chobbs and I'm the proud creator of this site, which I built using Gatsby.</p>    
        </Layout>
    )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage

