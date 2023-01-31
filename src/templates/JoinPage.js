import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import JoinImage01 from '../components/JoinImage01'
import JoinImage02 from '../components/JoinImage02'
import JoinImage03 from '../components/JoinImage03'
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
  join01,
  join02,
  join03,
  join05,
  joinImage01,
  joinImage02,
  joinImage03,
  video,
  videoPoster,
  videoTitle,
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

{/* JOIN HEADER */}
    <section className="noLineSection">
      <div className="container">
        <h1>
          Join
        </h1>
      </div>
    </section>

{/* JOIN ONE */}
    <div className='joinContainer'>
      <section className="imageSection">
        <div className="container">
          <JoinImage01 images={joinImage01} />
        </div>
      </section>
      <section className="">
        <div className="container">
          <Content source={join01} />
        </div>
      </section>
    </div>

{/* JOIN TWO */}
    <div className='joinContainer'>
      <section className="imageSection">
        <div className="container">
          <JoinImage02 images={joinImage02} />
        </div>
      </section>
      <section className="">
        <div className="container">
          <Content source={join02} />
        </div>
      </section>
    </div>

{/* JOIN THREE */}
<div className='joinContainer'>
      <section className="imageSection">
        <div className="container">
          <JoinImage03 images={joinImage03} />
        </div>
      </section>
      <section className="">
        <div className="container">
          <Content source={join03} />
        </div>
      </section>
    </div>

{/* OTHER JOIN SECTION */}
    <section className="noLineSection">
      <div className="container">
        <h1>
          Other join section
        </h1>
      </div>
    </section>

    {/* JOIN FIVE */}
    <div className='container'>
      <div className="Content">
          <Content source={join05} />
      </div>
    </div>
    <section className="section">
      <div className="container">
        <Gallery images={gallery} />
      </div>
    </section>

{/* VIDEO, ACCORDION, AND POPUP SECTIONS HIDDEN */}
    {/*<section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

     <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Popup>
          <Content source={join01} />
        </Popup>
      </div>
    </section> */}

    {/* NOTE ABOUT FRAGMENTS: */}
    {/* If the things are added back in, the following fragments also have to be added:
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        } */}

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
      ...JoinImage01
      ...JoinImage02
      ...JoinImage03
      ...JoinImage04
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        join01
        join02
        join03
        join05
      }
    }
  }
`
