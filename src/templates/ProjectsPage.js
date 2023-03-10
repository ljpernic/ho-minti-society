import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import ProjectImage01 from '../components/ProjectImage01'
import ProjectImage02 from '../components/ProjectImage02'
import ProjectImage03 from '../components/ProjectImage03'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout.js'

//import Accordion from '../components/Accordion'
//import BackgroundVideo from '../components/BackgroundVideo'
//import Popup from '../components/Popup'

// Export Template for use in CMS preview
export const ProjectsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  project01,
  project02,
  project03,
  project05,
  projectImage01,
  projectImage02,
  projectImage03,
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

{/* PROJECTS HEADER */}
    <section className="noLineSection">
      <div className="container">
        <h1>
          Ongoing Projects
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

{/* PROJECT THREE */}
<div className='projectContainer'>
      <section className="imageSection">
        <div className="container">
          <ProjectImage03 images={projectImage03} />
        </div>
      </section>
      <section className="">
        <div className="container">
          <Content source={project03} />
        </div>
      </section>
    </div>

{/* PAST PROJECTS SECTION */}
    <section className="noLineSection">
      <div className="container">
        <h1>
          Past projects
        </h1>
      </div>
    </section>

    {/* PROJECT FIVE */}
    <div className='container'>
      <div className="Content">
          <Content source={project05} />
      </div>
    </div>
    <section className="section">
      <div className="container">
        <Gallery images={gallery} />
      </div>
    </section>
  </main>
)

const ProjectsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProjectsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...ProjectImage01
      ...ProjectImage02
      ...ProjectImage03
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        project01
        project02
        project03
        project05
      }
    }
  }
`
