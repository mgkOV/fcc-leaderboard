import React from 'react';

export default ({ number, username, recent, alltime }) => {
  return (
    <tr>
      <td>{ number }</td>
      <td>{ username }</td>
      <td>{ recent }</td>
      <td>{ alltime }</td>
    </tr>
  );
}
