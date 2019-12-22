import React, { Component } from "react";
import "./RoseCard.scss";

export default class RoseCard extends Component {
  state = {
    showImg: false
  };

  handleChange = event => this.setState({ showImg: event.target.checked });

  handleClick = () => {
    const { index, deleteItem } = this.props;
    deleteItem(index);
  };

  render() {
    const { roseColour, selector, type, roseImg } = this.props;
    const { showImg } = this.state;
    return (
      <div className="rose-card">
        <button className="delete-btn" onClick={this.handleClick}>
          <span role="img" aria-label="delete">&#10060;</span>
        </button>
        <h4>{type}</h4>
        <h5>Color: {roseColour}</h5>
        <h5>Selector: {selector}</h5>
        <input
          type="checkbox"
          checked={showImg}
          onChange={this.handleChange}
          id={type.split(" ").join("_")}
        />
        <label htmlFor={type.split(" ").join("_")}>Toggle</label>

        {showImg && <img src={roseImg} alt={"rose"} />}
      </div>
    );
  }
}
