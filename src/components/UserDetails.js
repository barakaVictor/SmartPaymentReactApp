import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDigits: {
        firstset:[],
        secondset:[],
        thirdset:[],
        fourthset:[]
      }
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event){
    let value = event.target.value;
    this.setState({
      cardDigits:{
      ...this.state.cardDigits, [event.target.name]:value
      }
    });
  }

  render() {
    return (
      <div className="user-details">
        <input 
          type="text" 
          size="4" 
          name="firstset" 
          placeholder="----" 
          value={this.state.cardDigits.firstset} 
          onChange={this.handleInput}/>
        <input 
          type="text" 
          size="4" 
          name="secondset" 
          placeholder="----" 
          value={this.state.cardDigits.secondset} 
          onChange={this.handleInput}/>
        <input 
          type="text"  
          size="4" 
          name="thirdset" 
          placeholder="----" 
          value={this.state.cardDigits.thirdset} 
          onChange={this.handleInput}/>
        <input 
          type="text" 
          size="4" 
          name="fourthset" 
          placeholder="----" 
          value={this.state.cardDigits.fourthset} 
          onChange={this.handleInput}/>
      </div>
    );
  }
}

export default UserDetails;
