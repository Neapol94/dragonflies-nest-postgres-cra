import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className='main'>
      <h2>Page not found</h2>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default PageNotFound;
