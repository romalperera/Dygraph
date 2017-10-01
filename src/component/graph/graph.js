import React, { Component } from 'react';
import dataSet from '../../../sample-data.json';
import Dygraph from 'dygraphs';

export default class Graph extends Component {

  preset_dygraph = {

   
    'pressure': {
      "gridLineWidth": 0.1,
      "connectSeparatedPoints": true,
      "axes": {"x": {"axisLabelFontSize": 14}}
    }
  };

  constructor() {
    super();
    this.state = {
      graphConfig: null,
      data: []
    }
  }

  render() {
    if(this.state.data && this.state.graphConfig) {
      console.log(this.state);
      return (
        <div>
          <div className="App-graph-container">
            <this.props.component
              data={this.state.data}
              config={this.state.graphConfig}/>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  componentDidMount() {
    let config = Object.assign(this.preset_dygraph[this.props.preset], {
      title: this.props.title,
      xlabel: this.props.xlabel,
      ylabel: this.props.ylabel,
      labels: this.props.labels,
    });

    this.setState({
      graphConfig: config
    });

    setTimeout(function() {
      var morphedData = [];
      dataSet.forEach(function (col, index) {
        morphedData[index] = [new Date(col[0]), col[1]];
      });
      this.setState({
        graphConfig: config,
        data: morphedData
      })
    }.bind(this), 100)
  }

}