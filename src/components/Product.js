import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.producer}</h1>
        <h1>{this.props.hasWatermark ? "Has Watermark" : "No Watermark" }</h1>
        <h1>{this.props.color}</h1>
        <h1>{this.props.weight}</h1>
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
  weight: (props, propName) => {
    const enteredWeight = props[propName]

    if (enteredWeight === undefined) {
      return new Error(
        'Invalid prop `' + propName + '`. Validation failed.'
      );
    }

    if (isNaN(enteredWeight)) {
      return new Error(
        'The `weight` prop must be a number.'
      );
    }

    const okWeight = enteredWeight > 80 && enteredWeight < 300;

    if (!okWeight) {
      return new Error('The `weight` prop must be between 80 and 300.');
    }
  },

}

export default Product;
