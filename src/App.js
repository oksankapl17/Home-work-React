import React, {Component} from "react";
import "./App.css";
import RoseCard from "./components/rose-card";
import Form from "./components/form"

class App extends Component {
  state = {
    count: 0,
    countDec: 10,
    countAddHundred: 0,
    countDecHundred: 1000,
    loading: false,
    value: "",
    roses: [
      {
        roseColour: 'pink',
        selector: 'Austin',
        type: 'Princess Alexandra of Kent',
        roseImg: 'https://smhttp-ssl-80650.nexcesscdn.net/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/r/princess-alexandra-of-kent-2.jpg'
      },
      {
        roseColour: 'yellow',
        selector: 'Austin',
        type: 'Golden Celebration',
        roseImg: 'https://smhttp-ssl-80650.nexcesscdn.net/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/g/o/golden-celebration-7.jpg'
      },
      {
        roseColour: 'light pink',
        selector: 'Austin',
        type: 'Mary Rose',
        roseImg: 'https://yaskravaklumba.com.ua/uploads/shop/products/large/019181f043247e3b6bad060b1ee7b526.jpg'
      },
      {
        roseColour: 'orange',
        selector: 'Austin',
        type: 'Pat Austin',
        roseImg: 'https://www.treloarroses.com.au/image/cache/catalog/PatAustin_0255wm-800x800.jpg'
      },
      {
        roseColour: 'white',
        selector: 'Austin',
        type: 'Desdemona',
        roseImg: 'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwef6dec27/Images/Product%20Images/prod100101/prod100101.jpg?sw=322&sh=380&sm=fit'
      },
      {
        roseColour: 'purple',
        selector: 'Austin',
        type: 'Falstaff ',
        roseImg: 'https://www.treloarroses.com.au/image/cache/catalog/New_MultiImage_Uploads/Falstaff-wm096_2-800x800.jpg'
      }
    ]
  };

  componentDidMount() {
    this.setState({loading: true})

    setTimeout(() => {
      this.setState({loading: false})
    }, 2000)
  }

  clickHandler = (index) => {
    const roses = [...this.state.roses];
    roses.splice(index, 1);
    this.setState({roses})
  };

  renderRoses = () => this.state.roses.map((rose, index) => (
    <RoseCard key={rose.type} index={index} deleteItem={this.clickHandler} {...rose}/>));


  onInc = () => this.setState(prevState => ({count: prevState.count + 1}));

  onDec = () =>
    this.state.countDec > 0 &&
    this.setState(prevState => ({
      countDec: prevState.countDec - 1
    }));

  onAddHundred = () => this.setState((prevState) => ({countAddHundred: prevState.countAddHundred + 100}));

  onDecHundred = () =>
    this.state.countDecHundred > 0 &&
    this.setState(prevState => ({
      countDecHundred: prevState.countDecHundred - 100
    }));


  onReset = () => {
    this.setState({
      count: 0,
      countDec: 0,
      countAddHundred: 0,
      countDecHundred: 0
    });
  };

  handleAdd = (cardObject) => {
    const roses = [...this.state.roses];
    roses.push(cardObject);
    this.setState({roses});
  };

  render() {
    const {count, countDec, countAddHundred, countDecHundred} = this.state;
    return (
      <div className="container">
        <div className="content">
          <h1>{count}</h1>
          <button onClick={this.onInc}>inc</button>
          <hr/>
          <h2>{countDec}</h2>
          <button onClick={this.onDec}>dec</button>
          <hr/>
          <h2>{countAddHundred}</h2>
          <button onClick={this.onAddHundred}>Add One Hundred</button>
          <hr/>
          <h2>{countDecHundred}</h2>
          <button onClick={this.onDecHundred}>Decrement one Hundred</button>
          <hr/>
          <button onClick={this.onReset}>Reset</button>
        </div>

        <hr/>
        <Form addNewCard={this.handleAdd}/>
        <hr/>
        <div
          className="wrapper">
          {this.state.loading ? <h2>Is loading, please wait...</h2> : this.renderRoses()}
        </div>

      </div>
    );
  }
}

export default App;
