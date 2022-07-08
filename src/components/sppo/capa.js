import React, { Component } from "react";
import ReactDOM from "react-dom";

import TripsMap from "../../pages/especial-sppo/tripsmap";

class App extends Component {
  render() {
    return <TripsMap />;
  }
}

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("capa-sppo")
);
