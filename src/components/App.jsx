import React from 'react';
import Table from 'Table';

export default (props) => {
  return (
    <div className="app">
      <div className="logo">
        <a href="https://www.freecodecamp.com" target="_blank">
          <img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="learn to code javascript at Free Code Camp logo" className="img-logo" />
        </a>
      </div>
      <Table />
    </div>
  );
}
