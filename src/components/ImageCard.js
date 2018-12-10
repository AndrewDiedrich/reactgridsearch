import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };
//create instance var. used below will give you some dom info
        this.imageRef = React.createRef();
    }

    componentDidMount() { //log out dom element
        // console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.setSpans);
        //setSpans is callback when image loads, thus giving us the height value now
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({spans});
    }
    
    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;