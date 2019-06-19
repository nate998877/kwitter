import React, { Component } from "react";
import { connect } from "react-redux";
import Chit from "./Chit";
import { getMessagesAction } from "../../../actions/messages";
import { getUsersAction } from "../../../actions/users";

//good luck implementing this
class ChitGroups extends Component {
  componentDidMount() {
    this.props.getUsersAction();
    this.props.getMessagesAction();
  }
  render() {
    return (
      // <SegmentGroup className="left-ColDash">
      //   <h2>TOP CHITS...</h2>
      //   <Segment vertical color="black" padded loading>
      //     <Grid.Row>[insert chit here]</Grid.Row>
      //     <Grid.Row>[insert chit here]</Grid.Row>
      //     <Grid.Row>[insert chit here]</Grid.Row>
      //   </Segment>
      //   <h2>TOP WORDS...</h2>
      //   <Segment vertical color="black" padded loading>
      //     <Grid.Row>[insert chit here]</Grid.Row>
      //     <Grid.Row>[insert chit here]</Grid.Row>
      //   </Segment>
      //   <h2>TOP SQUIRRELS and ELITES...</h2>
      //   <Segment vertical color="black" padded loading>
      //     <Grid.Row>[insert chit here]</Grid.Row>
      //     <Grid.Row>[insert chit here]</Grid.Row>
      //     <Grid.Row>[insert chit here]</Grid.Row>
      //   </Segment>
      // </SegmentGroup >
      <React.Fragment>
        {this.props.chits
          ? this.props.chits.messages.map(chit => (
              <Chit key={chit.id} text={chit.text} time={chit.createdAt}/>
            ))
          : ""}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ messages, users }) => {
    return {
      chits: messages.message,
      users: users.userId,
    };
  },
  { getMessagesAction, getUsersAction }
)(ChitGroups);
