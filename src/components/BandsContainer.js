import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  
 renderBands = () => this.props.bands.map(band => <Band band={band} delete={this.props.delete}/>)
 
  
  render() {
    return (
      <div>
        {this.renderBands()}
        <BandInput addBand={this.props.addBand}/>

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
