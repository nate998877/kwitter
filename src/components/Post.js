import React, { Component } from "react";

class Post extends Component {
  render() {
      return (
        <div>
          <div>
            {this.props.payload}
          </div>
        </div>
      )
    }
}

export default Post
