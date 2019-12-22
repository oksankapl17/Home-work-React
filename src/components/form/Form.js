import React, {Component} from "react";
import './Form.scss';

export default class Form extends Component {
  state = {
    roseColour: '',
    selector: '',
    type: '',
    roseImg: ''
  };

  onInputChange = ({target: {name, value}}) => this.setState({[name]: value});

  // onInputChange = (event) => {
  //   const target = event.target;
  //   const name = target.name;
  //   const value = target.value;
  //  this.setState({[name]: value});
  // }

  handleSubmit = (event) => {
    const {addNewCard} = this.props;
    event.preventDefault();
    addNewCard(this.state);
  };

  render() {

    return (
      <div className={"add-new-card-class"}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="roseColour"> RoseColour:
            <input type="text" name="roseColour" onChange={this.onInputChange}/>
          </label>
          <label htmlFor="selector"> Selector:
            <input type="text" name="selector" onChange={this.onInputChange}/>
          </label>
          <label htmlFor="type"> Type:
            <input type="text" name="type" onChange={this.onInputChange}/>
          </label>
          <label htmlFor="roseImg"> RoseImg:
            <input type="text" name="roseImg" onChange={this.onInputChange}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

}
