// Code Product Component Here
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Product extends Component {
  render () {
    return (
      <div>Products</div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    let val = props[propName]

    if (val === undefined) {
      return new Error('The `weight` prop is required.')
    }

    if (isNaN(val)) {
      return new Error('The `weight` prop is not a number.')
    }

    if (val < 80 || val > 300) {
      return new Error('The "weight" prop should range between 80 and 300')
    }
  }
}
