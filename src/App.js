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

    // When I click a button
    // I want this to change to:
    //
    // whatDayIsIt: 'Cage Day',
    // feeling: 'Clickalus'
  }

  // Save a `this`!
  // Use arrow functions
  // Arrow functions will save you
  clickalicious = () => {
    // Always use this.setState()
    console.log('clickalicious was called');
    this.setState({
      feeling: 'Clickalus',
      whatDayIsIt: 'Cage Day'
    });
  }

  onFeelingChange = (event) => {
    console.log('event.target', event.target);
    console.log('event.target.value', event.target.value);
    
    this.setState({
      feeling: event.target.value
    });
  }

  onDayChange = (event) => {
    this.setState({
      whatDayIsIt: event.target.value
    });
  }


  myAwesomeFunction(){ // Didn't use word function because this was made in a class
    console.log('I have a state!', this.state);
  }

  render() {
    // Access state
    console.log('App state is', this.state);
    console.log('this is', this);

    // Awesome function
    this.myAwesomeFunction();

    // If it was jQuery
    // $(document).on('click', 'button', this.clickalicious);


    // Return some JSX
    // JSX === "Javascript eXtended"
    return (
      <div>
        <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>

        <div>Today is {getDate()}</div>

        <input type="text" placeholder="How are you feeling?" onChange={this.onFeelingChange} />
        <input type="text" placeholder="What day is it?" onChange={this.onDayChange} />
        <button onClick={this.clickalicious}>Clickalicious</button>

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
