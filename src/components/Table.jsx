import React from 'react';
import axios from 'axios';

const apiURL = 'https://fcctop100.herokuapp.com/api/fccusers/top'
const leaders30days = `${apiURL}/recent`;
const leadersAllTime = `${apiURL}/alltime`;

class Table extends React.Component {
  render() {
    return(
      <table>
        <caption>Leaderboard</caption>
        <thead>
          <tr>
            <th>Camper Name</th>
            <th>Points in past 30 days</th>
            <th>All time points</th>
          </tr>
        </thead>
        <tbody>
          {}
        </tbody>
      </table>
    )
  }
}

export default Table;
