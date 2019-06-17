import React, { Component } from "react";
import { connect } from "react-redux"
import { likePost as like, unlikePost as unlike} from "../actions"

class LikeButton extends Component {
  toggleLike = ()=>{
    let whichFetch = false
    let likeid
    if(this.props.message.likes.length){
      for(const like of this.props.message.likes){
        if(like.userId === this.props.userId){
          whichFetch = true;
          likeid = like.id
        }
      }
    }
    if(whichFetch){
      const send = { token:this.props.token, id:likeid }
      this.props.unlike(send)
    }else{
      const send = { token:this.props.token, id:this.props.message.id }
      this.props.like(send)
    }
  }

  render() {
      return (
        <div className="ui labeled button" tabindex="0">
          <div className="ui button" onClick={this.toggleLike}>
            <i className="heart icon"></i> Like
          </div>
          <label className="ui basic label">
            {this.props.message.likes.length}
          </label>
        </div>
      )
    }
}

export default connect(null,{like, unlike})(LikeButton) 