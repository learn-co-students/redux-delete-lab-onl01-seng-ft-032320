import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = event => {
    event.preventDefault();
    this.props.delete(this.props.band.id)
  }

  render() {
    return(
      <div>
          <li>
            {this.props.band.name}
            
          </li>
          <button onClick={this.handleOnClick}>DELETE</button>
      </div>
    );
  }
};

export default Band;
