import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Producer: {this.props.producer}</li>
          <li>Has watermark? {`${this.props.hasWatermark}`}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    let weight = props[propName];

    if (weight === undefined) {
      return new Error("Weight cannot be blank.");
    }
    if (isNaN(weight)) {
      return new Error("Weight must be a number.");
    }
    if (weight <= 80 || weight >= 300) {
      return new Error("Weight must be between 80 and 300");
    }
  }
};

export default Product;
