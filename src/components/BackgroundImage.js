import React, { Component, Fragment } from 'react'
import Image from './Image'

import './BackgroundImage.css'

class BackgroundImage extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  state = {
    mobileWidth: false
  }

  updateDimensions() {
    this.setState({ mobileWidth: window.innerWidth <= 900 })
  }

  render() {
    const { imageTitle, children } = this.props
    return (
      <Fragment>
          <div className={`BackgroundImage`}>
            <Image
              ref={this.ref}
              className={`BackgroundImage--image`}
              alt=''
            >
              {children}
            </Image>
            {imageTitle && (
              <div className="BackgroundImage--imageTitle">{imageTitle}</div>
            )}
          </div>
      </Fragment>
    )
  }
}

export default BackgroundImage
