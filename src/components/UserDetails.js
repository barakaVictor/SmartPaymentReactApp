import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDigits: []
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="user-details">
        <input type="text" size="4" placeholder="----" />
        <input type="text" size="4" placeholder="----" />
        <input type="text" size="4" placeholder="----" />
        <input type="text" size="4" placeholder="----" />
      </div>
    );
  }
}

export default UserDetails;
