import React, {Component} from 'react';

export default class Guess extends Component{
  render(){
    return (
      <div> {this.props.currentGuess.split('').join(' ')}</div>
    );
  }
}
