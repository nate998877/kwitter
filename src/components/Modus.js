import React, { Component } from "react";

class Modus extends Component {

  render() {
      return (
      <div id="modus" onClick={this.props.removeModus}>
        <div className="modus-card" onClick={(e)=>{return e.stopPropagation()}}>
          {this.props.payload}
        </div>
      </div>
      )
    }
}

export default Modus