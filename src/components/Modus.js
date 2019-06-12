import React, { Component } from "react";

class Modus extends Component {

    render() {
        return (
        <div className="modus">
          <div className="modus-card">
            {this.props.payload}
          </div>
        </div>
        )
      }

}

export default Modus