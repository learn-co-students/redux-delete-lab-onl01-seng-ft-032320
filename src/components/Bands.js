import React, { Component } from 'react'
import Band from './Band'
export default class Bands extends Component {
    render() {
        
        let bands = this.props.bands.map(band => {
            return <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>
        })
        return (
            <div>
                {bands}
            </div>
        )
    }
}
