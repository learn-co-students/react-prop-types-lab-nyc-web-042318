// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

let array = []
for (let i = 80; i <= 300; i++) {
  array.push(i)
}


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


Product.defaultProps = {
  hasWatermark: false
}



Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(array).isRequired
  // weight: PropTypes.number.isRequired
}

export default Product
