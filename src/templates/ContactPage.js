import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
// NOTE: Removed FormSimpleAjax because we are using cognitoforms for the contact form.
//import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
// NOTE: See note below.
// import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  formSection,
  address,
  phone,
  email,
  locations
}) => (
  <main className="Contact">
    <PageHeader
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

  {/* CONTACT DETAILS SECTION */}
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
          <div className="Contact--Details">
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
      </div>
    </section>

{/* NOTE: Hid the GoogleMap thing because it seems unnecessary */}
    {/* <GoogleMap locations={locations} /> */}
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        formSection
        address
        phone
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`
