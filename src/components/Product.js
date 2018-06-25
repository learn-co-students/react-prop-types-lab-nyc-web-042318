// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  static defaultProps ={
    hasWatermark: false
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
    weight: PropTypes.number.isRequired
  }


  

  render(){
    return (
      <p>{this.props.name}</p>
    )
  }
}

export default Product;
