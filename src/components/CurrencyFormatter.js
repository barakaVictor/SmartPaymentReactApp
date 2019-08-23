import React from "react";
import CurrencyCodes from "../currencyCodes/currencyCodes";

class CurrencyFormatter extends React.Component {
  formatCurency = (amount, country = "United States") => {
    let currencyFormatObj = CurrencyCodes.find(obj => obj.country === country);
    /*if (!currencyFormatObj) {
      currencyFormatObj = CurrencyCodes.find(
        obj => obj.country === "United States"
      );
    }*/
    const { currency, code } = currencyFormatObj;
    return amount.toLocaleString(`en-${code}`, {
      style: "currency",
      currency: currency
    });
  };
  render() {
    return (
      <span className="total-bill">
        {this.formatCurency(this.props.amount, this.props.country)}
      </span>
    );
  }
}

export default CurrencyFormatter;
