import React from "react";
import Item from "./Item";

class Items extends React.Component {
  render() {
    return (
      <div className="list-of-items">
        <ul>
          {this.props.items.map(item => (
            <Item item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Items;
