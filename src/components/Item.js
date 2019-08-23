import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.item.name}
        <ul>
          <li>Price: {this.props.item.price}</li>
          <li>Qty: {this.props.item.qty}</li>
        </ul>
      </li>
    );
  }
}
export default Item;
