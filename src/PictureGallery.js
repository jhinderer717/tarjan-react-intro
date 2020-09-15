// Import React library
// and also the `Component` variable
// from inside it
import React, { Component } from 'react';

class PictureGallery extends Component {
    
    render(){
        return (
            <div>
                <img src="http://picsum.photo/200/200" />
                <img src="http://picsum.photo/200/200" />
                <img src="http://picsum.photo/200/200" />
                <img src="http://picsum.photo/200/200" />
                <img src="http://picsum.photo/200/200" />
                <img src="http://picsum.photo/200/200" />
            </div>
        );
    }

}

// If this were node...
// module.exports = PictureGallery;


// But on the client-side now we do:
export default PictureGallery;