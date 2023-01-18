import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'

//import Accordion from '../components/Accordion'
//import BackgroundVideo from '../components/BackgroundVideo'
//import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  gallery,
}) => (
  <main>
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

{/* TOP SECTION */}
    <section className="topSection">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

  </main>
)

const AboutPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
      }
    }
  }
`
