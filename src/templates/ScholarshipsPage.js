import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout.js'

//import Accordion from '../components/Accordion'
//import BackgroundVideo from '../components/BackgroundVideo'
//import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const ScholarshipsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  gallery,
//  accordion,
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


    <section className="section">
      <div className="container">
        <Gallery images={gallery} />
      </div>
    </section>

  </main>
)

const ScholarshipsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ScholarshipsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ScholarshipsPage

export const pageQuery = graphql`
  query ScholarshipsPage($id: String!) {
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
