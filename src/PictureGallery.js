// Import React library
// and also the `Component` variable
// from inside it
import React, { Component } from 'react';

class PictureGallery extends Component {
    
    render(){
        return (
            <div>
                <img src="http://picsum.photos/200/200" />
                <img src="http://picsum.photos/200/201" />
                <img src="http://picsum.photos/200/202" />
                <img src="http://picsum.photos/200/203" />
                <img src="http://picsum.photos/200/204" />
                <img src="http://picsum.photos/200/205" />
            </div>
        );
    }

}

// If this were node...
// module.exports = PictureGallery;


// But on the client-side now we do:
export default PictureGallery;