import React from 'react';


export class NumberInput extends React.Component {
  constructor(props){
    super(props);    
    this.handleUserInput=this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.props.onUserInputChange(e.target.value);
  }

  render() {
    return (
        <input onChange={this.handleUserInput} min='0' max='50' type="number"  />
    );
  }
}
