import React from "react"
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark.toString()}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function weightChecker(props, propName, isRequired) {
    if (props[propName].isRequired){
      return new Error("Must have something there.")
    }
    if (isNaN(props[propName])) {
      return new Error("Must be a number")
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error("Must be between 80 and 300")
    };
}
}
export default Product;
