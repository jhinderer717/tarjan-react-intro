import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getDate from './utils/getDate';

// If this were node...
// const PictureGallery = require('./PictureGallery');

// But on the client side we do
import PictureGallery from './PictureGallery';

// Import the ThingsToLearn component
import ThingsToLearn from './ThingsToLearn';

// React Component Incantation
class App extends Component {


  state = {
    whatDayIsIt: 'Burrito Day',
    feeling: 'Zen',
    human: [
      {
        firstName: 'John',
        lastName: 'Greatest'
      },
      {
        //...
      }
    ]
  }


  myAwesomeFunction(){
    console.log('I have a state!', this.state);
  }

  render() {
    // Access state
    console.log('App state is', this.state);
    console.log('this is', this);

    // Awesome function
    this.myAwesomeFunction();


    // Return some JSX
    // JSX === "Javascript eXtended"
    return (
      <div>
        <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>

        <div>Today is {getDate()}</div>

        <h3>Things to learn about React:</h3>
        <ThingsToLearn />

        <h3>Check out my picture gallery:</h3>
        <PictureGallery />

        <h3>Here's another!</h3>
        <PictureGallery />
      </div>
    );
  }

} // end App component

// function getDate(){
//   return new Date().toLocaleDateString();
// }

export default App;
