import React from 'react';


export class CheckBox extends React.Component {
  constructor(props){
    super(props);    
    this.handleUserInput=this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
      this.props.onUserInputChange(e.target.value);
  }

  render() {
    return (
      <form>
        <label>
          Add numbers?
          <input
            // name={this.props.name}
            type={this.props.type}
            value={this.props.value}
            onChange={this.handleUserInput} />
        </label>
      </form>
    );
  }
}
