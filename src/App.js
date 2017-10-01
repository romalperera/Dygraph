import React, { Component } from 'react';
import Graph, { Dygraph } from './component/graph';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>React Dygraph</h1>
        </div>
        <div className="App-body">
          <Graph preset="pressure"
                 component={Dygraph}
                 title="Pressure Transient(s)"
                 xlabel="Time" ylabel="Pressure (meters)"
                 labels={["Date", "Tampines Ave10 (Stn 40)"]}/>
        </div>
      </div>
    );
  }
}


export default App;