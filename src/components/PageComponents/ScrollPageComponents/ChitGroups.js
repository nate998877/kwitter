import React, { Component } from "react";
import { SegmentGroup, Segment, Grid } from "semantic-ui-react";

//good luck implementing this 
class ChitGroups extends Component {
  render() {
    return(
      <SegmentGroup className="left-ColDash">
        <h2>TOP CHITS...</h2>
        <Segment vertical color="black" padded loading>
          <Grid.Row>[insert chit here]</Grid.Row>
          <Grid.Row>[insert chit here]</Grid.Row>
          <Grid.Row>[insert chit here]</Grid.Row>
        </Segment>
        <h2>TOP WORDS...</h2>
        <Segment vertical color="black" padded loading>
          <Grid.Row>[insert chit here]</Grid.Row>
          <Grid.Row>[insert chit here]</Grid.Row>
        </Segment>
        <h2>TOP SQUIRRELS and ELITES...</h2>
        <Segment vertical color="black" padded loading>
          <Grid.Row>[insert chit here]</Grid.Row>
          <Grid.Row>[insert chit here]</Grid.Row>
          <Grid.Row>[insert chit here]</Grid.Row>
        </Segment>
      </SegmentGroup >
    )
  }
}

export default ChitGroups; 
