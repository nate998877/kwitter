import React, { Component } from "react";
import { List } from "semantic-ui-react";

class GenericScroll extends Component {

  render() {
      return (
        <React.Fragment>
          <List>
            {this.props.payload}
          </List>
        </React.Fragment>
      )
    }
}

export default GenericScroll