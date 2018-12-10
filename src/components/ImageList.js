import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    //console.log(props.images)
    const images = props.images.map(image => {
        //assing key to root element of jsx in map function
        return <ImageCard key={image.id} image={image} />;
    });

    return (
        <div className="image-list">{images}</div>
    )
};

export  default ImageList;