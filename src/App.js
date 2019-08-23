import React from "react";
import Items from "./components/Items";
import TotalCalculator from "./components/TotalCalculator";
import UserDetails from "./components/UserDetails";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: [],
      buyerCountry: ""
    };
  }
  componentDidMount() {
    const apiHost = "https://randomapi.com/api";
    const apiKey = "006b08a801d82d0c9824dcfdfdfa3b3c";
    const apiEndpoint = `${apiHost}/${apiKey}`;
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(response => {
        const { results } = response;
        const [data] = results;
        const { itemsInCart, buyerCountry } = data;
        this.setState({
          itemsInCart: itemsInCart,
          buyerCountry: buyerCountry
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <TotalCalculator itemsInCart={this.state.itemsInCart} />
        <Items items={this.state.itemsInCart} />
        <UserDetails />
      </div>
    );
  }
}
export default App;
