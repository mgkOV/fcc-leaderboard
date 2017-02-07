import React from 'react';
import axios from 'axios';

import UserRow from 'UserRow';

const apiURL = 'https://fcctop100.herokuapp.com/api/fccusers/top'
const leaders30days = `${apiURL}/recent`;
const leadersAllTime = `${apiURL}/alltime`;

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: 'recent',
      recent: [],
      alltime: []
    }

    this.renderRecentOrder = this.renderRecentOrder.bind(this);
    this.renderAlltimeOrder = this.renderAlltimeOrder.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }


  componentDidMount() {
    axios.get(leaders30days)
      .then(response => {
        this.setState({
          recent: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    axios.get(leadersAllTime)
      .then(response => {
        this.setState({
          alltime: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderRecentOrder(evt) {
    this.setState({
      order: 'recent'
    });
  }

  renderAlltimeOrder(evt) {
    this.setState({
      order: 'alltime'
    });
  }


  renderRow() {
    if (this.state.order === 'recent') {
      var users = this.state.recent.slice();
    } else {
      var users = this.state.alltime.slice();
    }
    return (
      users.map(user => {
        user.number = users.indexOf(user) + 1;
        return <UserRow key={user.number} {...user}/>
      })
    )
  }

  render() {
    return(
      <table>
        <caption>LEADERBOARD</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th onClick={this.renderRecentOrder} className={"order" + (this.state.order === "recent"? " arrow" : "")}>Points in past 30 days</th>
            <th onClick={this.renderAlltimeOrder} className={"order" + (this.state.order === "alltime" ? " arrow" : "")}>All time points</th>
          </tr>
        </thead>
        <tbody>
          { this.renderRow() }
        </tbody>
      </table>
    )
  }
}

export default Table;
