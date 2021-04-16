import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image';
import "./SlideShow.scss";
import 'react-slideshow-image/dist/styles.css'

SlideShow.propTypes = {
    images: PropTypes.array,
};

SlideShow.defaultProps = {
    images: null,
};

const result = (images) => {
    if( images.length === 0) return;

    return (
        <Slide>
            {
                images.map((image, index) => (
                    <div className="each-slide" key={index}>
                        <img src={image["data_url"]} alt=""/>
                    </div>
                ))
            }
        </Slide>
    );
}

function SlideShow(props) {

    const { images } = props;
    console.log(images);

    

    return (
        <div className="slide-container">
            {result(images)}
        </div>
    );
}

export default SlideShow;