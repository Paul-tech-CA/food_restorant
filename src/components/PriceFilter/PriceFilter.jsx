import React, { Component } from "react";
import { toCurrency } from "../../lib";

class PriceFilter extends Component {
  state = {
    maxPrice: 9999,
    minPrice: 0,
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onHandleSubmit(this.state);
    console.log("work");
  };

  onHandleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { maxPrice, minPrice } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <h5>Цена</h5>
        <div className="row mt-3">
          <div className="col-6">
            <input
              type="text"
              name="minPrice"
              className="form-control"
              placeholder={toCurrency({ price: 0 })}
              aria-label="default input example"
              value={minPrice}
              onChange={this.onHandleChange}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              name="maxPrice"
              className="form-control"
              placeholder={toCurrency({ price: 1000 })}
              aria-label="default input example"
              value={maxPrice}
              onChange={this.onHandleChange}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Применить
        </button>
      </form>
    );
  }
}

export default PriceFilter;
