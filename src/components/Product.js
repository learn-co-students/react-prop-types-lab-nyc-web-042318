// Code Product Component Here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {

  }
}

function makeRange(a,b){
  let array = []
  for(let i=a; i < b; i++) {
    array.push(i)
  }
  return array
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  size: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: PropTypes.oneOf(makeRange(80, 300)).isRequired
};

export default Product;
