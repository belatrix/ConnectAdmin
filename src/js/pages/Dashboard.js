import React, { Component } from "react";
import CardList from "../components/CardList";
import { Button, Icon, Grid, Divider, Segment } from "semantic-ui-react";
import PopupBtn from "../components/PopupBtn";
import { fetchCurrentScore, fetchLastMonthScore, fetchTotalScore } from "../actions/scoreActions"
import { connect } from "react-redux";

@connect((store) => {
  return {
    data: store.score
  }
})

export default class Dashboard extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCurrentScore())
    this.props.dispatch(fetchLastMonthScore())
    this.props.dispatch(fetchTotalScore())
  }

  render () {

    const { currentMonth, lastMonth, total } = this.props.data;

    return (
      <div class="child-container">
        <h2>Quick Actions</h2>

        <Segment>
          <Grid stackable columns={3}>
              <PopupBtn href="#/notification" icon="send" content="Send notifications" />
              <PopupBtn href="#/ranking" icon="bookmark" content="Give badges" />
              <PopupBtn href="#/ranking" icon="group" content="Recommend groups" />
              <PopupBtn href="#/ranking" icon="calendar plus" content="Create events" />
              <PopupBtn href="#/ranking" icon="plus circle" content="Create badges" />
              <PopupBtn href="#/ranking" icon="tags" content="Create tags" />
          </Grid>
        </Segment>

        <h2>Recent Activity</h2>

        <Grid stackable columns={3}>
          <Grid.Column>
            <CardList data={currentMonth} header="Top current month" />
          </Grid.Column>
          <Grid.Column>
            <CardList data={lastMonth} header="Top last month" />
          </Grid.Column>
          <Grid.Column>
            <CardList data={total} header="Top all time" />
          </Grid.Column>
        </Grid>

      </div>
    )
  }
}
