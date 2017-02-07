import React from 'react';

export default ({ number, img, username, recent, alltime }) => {
  return (
    <tr>
      <td>{ number }</td>
      <td><a href={"https://www.freecodecamp.com/" + username} target="_blank"><img src={ img } alt='user picture' className="userImg"/>{ username }</a></td>
      <td>{ recent }</td>
      <td>{ alltime }</td>
    </tr>
  );
}
