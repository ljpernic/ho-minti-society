import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter" style={{'margin-top':'0.5em'}}>
      Find us on{' '}
      <a href="https://facebook.com/HoMintiSociety/">Facebook</a>.
    </h2>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Ho Minti Society. All rights reserved. 
        </span>
      </div>
    </footer>
  </div>
)
