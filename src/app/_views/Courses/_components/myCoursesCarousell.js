import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

const MyCoursesCarousell = (props) => {

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  }

  return (
    <Slider {...settings} style={{height: '100%'}}>
      <div style={{ width: 100, background: 'lightblue' }}>
        <p>100</p>
      </div>
      <div style={{ width: 200, background: 'red' }}>
        <p>200</p>
      </div>
      <div style={{ width: 75, background: 'lightgreen' }}>
        <p>75</p>
      </div>
      <div style={{ width: 300 }}>
        <p>300</p>
      </div>
      <div style={{ width: 225 }}>
        <p>225</p>
      </div>
      <div style={{ width: 175 }}>
        <p>175</p>
      </div>
    </Slider>
)
}

// MyCoursesCarousell.propTypes = {
//   : PropTypes.
// };

export default MyCoursesCarousell;
