// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </div>
    )
  }
}

function weightRange(props, propName, componentName) {
  if(props[propName]) {
    let value = props[propName];
    if (typeof value !== 'number') {
      return new Error('Invalid type')
    } else {
      if (value >= 80 && value <= 300) {
        return null
      } else {
        return new Error('Invalid range')
      }
    }
  } else {
    return new Error(`${propName} required`)
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
}

Product.defaultProps = {
  hasWatermark: false
}

export default Product
