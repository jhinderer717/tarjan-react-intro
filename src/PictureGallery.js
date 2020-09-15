// Import React library
// and also the `Component` variable
// from inside it
import React, { Component } from 'react';

class PictureGallery extends Component {
    state = {
        width: 200,
        height: 200
    }


    render(){
        return (
            <div>
                <img src={`https://picsum.photos/${this.state.width}/${this.state.height}`} />
                <img src="http://picsum.photos/200/201" />
                <img src="http://picsum.photos/200/202" />
                <img src="http://picsum.photos/200/203" />
                <img src="http://picsum.photos/200/204" />
                <img src="http://picsum.photos/1000/400" />
            </div>
        );
    }

}

// If this were node...
// module.exports = PictureGallery;


// But on the client-side now we do:
export default PictureGallery;