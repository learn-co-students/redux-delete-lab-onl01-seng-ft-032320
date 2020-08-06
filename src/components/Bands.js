import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {

  render() {
    return(
      <div>
        {this.props.bands.map((bandObj) => {return <Band band={bandObj} deleteBand={this.props.deleteBand} />})}
      </div>
    );
  }
};

export default Bands;
