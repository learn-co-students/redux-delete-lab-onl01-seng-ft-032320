import React, { Component } from 'react'
import Band from "./Band"

class Bands extends Component{

    

    
    render(){

        let groups = this.props.bands.map((band) => <Band delete={this.props.delete} key={band.id} band={band} />)
      return (<div>

         

         {groups}
          
      </div>)
          
       
    }
}

export default Bands