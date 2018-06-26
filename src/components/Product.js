// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

function array() {
let result = [];
  for(let i =80 ; i <301 ; i++){
    result.push(i);
  }
  return result;
}

class Product extends React.Component{
  static defaultProps ={
    hasWatermark: false
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
    weight: PropTypes.oneOf(array()).isRequired
  }


  render(){
    return (
      <p>{this.props.name}</p>
    )
  }
}

export default Product;
