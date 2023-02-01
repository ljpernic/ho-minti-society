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
export const JoinPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  joinBottomText,
  formSection,
  paypalLink,
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

{/* FORM SECTION */}
    <section className="noLineSection">
      <div className="container">
        <Content source={formSection} />
      </div>
    </section>

    {/* BOTTOM REMINDER TEXT */}
    <section className="section">
      <div className='container'>
        <div className="Content">
            <Content source={joinBottomText} />
        </div>
        <div className="container Center">
          <a href={paypalLink} className="Button">Pay Dues</a>
        </div>
      </div>
    </section>



    <section className="section">
      <div className="container">
        <Gallery images={gallery} />
      </div>
    </section>

  </main>
)

const JoinPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <JoinPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default JoinPage

export const pageQuery = graphql`
  query JoinPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        joinBottomText
        formSection
        paypalLink
      }
    }
  }
`
