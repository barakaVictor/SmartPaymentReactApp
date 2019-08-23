import React from "react";
import CurrencyFormatter from "./CurrencyFormatter";

class TotalCalculator extends React.Component {
  calculateTotal = items => {
    const amount = items.reduce(
      (subtotal, item) => subtotal + item.qty * item.price,
      0
    );
    return <CurrencyFormatter amount={amount} />;
  };
  render() {
    return this.calculateTotal(this.props.itemsInCart);
  }
}
export default TotalCalculator;
