import React, { Component } from 'react';
import Dygraph from 'dygraphs';
import Graph from './graph';
export default class DygraphPlotter extends Graph {

  constructor() {
    super();
    this.state = {
      data: [],
      config: {}
    };
  }

  render() {
    return (
      <div ref={(el) => this.graphRegion = el}>
        <p>DyGraph</p>
        <p>No data Available</p>
      </div>
    )
  }

  componentDidMount() {
    this.renderGraph(this.graphRegion, this.state.data, this.state.config);
  }

  componentDidUpdate() {
    this.renderGraph(this.graphRegion, this.state.data, this.state.config);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      config: nextProps.config
    }, function () {
      /* State Update complete */
    })
  }

  renderGraph(el, data, graphConfig) {

  

    if (data && data.length > 0 && graphConfig) {

      let config = Object.assign({}, graphConfig);

      if(this.$dyDraph) {
        this.$dyDraph.updateOptions({data: data});
      } else {

        
        this.$dyDraph = new Dygraph(el, data, config);
      }
    }
  }
}