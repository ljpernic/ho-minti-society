import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import ProjectImage01 from '../components/ProjectImage01'
import ProjectImage02 from '../components/ProjectImage02'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Image from '../components/Image'

import '../components/BackgroundImage.css'

// import BackgroundImage from '../components/BackgroundImage'
// import BackgroundVideo from '../components/BackgroundVideo'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ 
  title, 
  subtitle, 
  featuredImage, 
  project01,
  project02, 
  projectImage01,
  projectImage02,
  imageTitle,
  backgroundImage,
  body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

{/* TOP SECTION */}
    <section className="noLineSection">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

{/* JOIN BUTTON */}
    <div className='projectContainer'>
      <section className="buttonSection">
        <div className="container CenterButton">
          <a href="/join" className="Button">Join</a>
        </div>
      </section>
    </div>


{/* PROJECTS HEADER */}
    <section className="noLineSection">
      <div className="container">
        <h1>
          Project highlights
        </h1>
      </div>
    </section>

{/* PROJECT ONE */}
    <div className='projectContainer'>
      <section className="imageSection">
        <div className="container">
          <ProjectImage01 images={projectImage01} />
        </div>
      </section>
      <section className="">
        <div className="container">
          <Content source={project01} />
        </div>
      </section>
    </div>

{/* PROJECT TWO */}
    <div className='projectContainer'>
      <section className="imageSection">
        <div className="container">
          <ProjectImage02 images={projectImage02} />
        </div>
      </section>
      <section className="">
        <div className="container">
          <Content source={project02} />
        </div>
      </section>
    </div>

{/* PROJECTS BUTTON */}
    <div className='projectContainer'>
      <section className="buttonSection">
        <div className="container CenterButton">
          <a href="/projects" className="Button">See all projects</a>
        </div>
      </section>
    </div>

{/* EVENTS HEADER */}
{/* <section className="noLineSection">
      <div className="container">
        <h1>
          Current events
        </h1>
      </div>
    </section>
 */}
{/* EVENTS BUTTON */}
{/* <div className='projectContainer'>
      <section className="buttonSection">
        <div className="container CenterButton">
          <a href="/events" className="Button">See all events</a>
        </div>
      </section>
    </div> */}
{/* VIDEO EVENTS SECTION */}
{/* <section className="BackgroundVideo-section section">
      <Link to="/events"><BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo></Link>
    </section> */}

{/* BOTTOM IMAGE SECTION */}
    <section className="BackgroundImage-section section">
      <Link to="/events">
        <Image 
          resolutions="large"
          src={backgroundImage}
          alt='some text'
         />
         <div className="BackgroundImage--imageTitle">{imageTitle}</div>
      </Link>
    </section>

  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout 
    meta={page.frontmatter.meta || false}
  >
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...ProjectImage01
      ...ProjectImage02
      html
      frontmatter {
        title
        subtitle
        featuredImage
        project01
        project02
        imageTitle
        backgroundImage
      }
    }
  }
`
