import { Component } from "react";
import ReactDOM from "react-dom";

const log = (key) => console.log(`${key} ${new Date().getTime()}`);

export default class CounterClass extends Component {
  constructor() {
    super();
    this.state = { seconds: 60 };
    this.tick = this.tick.bind(this);
    log("constructor");
  }

  tick() {
    if (this.state.seconds >= 65) {
      clearInterval(this.interval);
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
      return;
    } else {
      this.setState({ seconds: this.state.seconds + 1 });
    }

    log("tick");
  }

  componentDidMount() {
    log("did mount");
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    log("will unmount");
  }

  render() {
    log("render");

    return (
      <div className="App">
        <h1>{this.state.seconds}</h1>
      </div>
    );
  }
}
