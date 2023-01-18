import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ProjectsPageTemplate } from '../templates/ProjectsPage'
import { AboutPageTemplate } from '../templates/AboutPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { EventsIndexTemplate } from '../templates/EventsIndex'
import { SinglePostTemplate } from '../templates/SinglePost'
import uploadcare from 'netlify-cms-media-library-uploadcare';

CMS.registerMediaLibrary(uploadcare);

const config = {
  media_library: {
    name: 'uploadcare',  
    config: {
          publicKey: '1a455b51466494f0965e'
      }
  },
}
CMS.init({ config })

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('projects-page', ({ entry }) => (
  <ProjectsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('events-page', ({ entry }) => (
  <EventsIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
