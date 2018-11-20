import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Theme from '../Theme'

const BlogExcerpt = ({ id, color, slug, title, date, excerpt }) => {
  return (
    <div
      style={{
        // eslint-disable-next-line
        ['--link-color']: `${Theme.colors[color]}`,
      }}
    >
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <small>{date}</small>
      <p>
        {excerpt}
        <br />
        <br />
        <Link to={slug}>Continue Reading →</Link>
      </p>
    </div>
  )
}

BlogExcerpt.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.date,
  excerpt: PropTypes.string,
}

export default BlogExcerpt
