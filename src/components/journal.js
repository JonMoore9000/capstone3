import React from 'react';
import AddMemory from './new-memory';
import OldMemory from './old-memory';

export default class Journal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  return(
    <div>
      <AddMemory />
      <br></br>
      <OldMemory />
    </div>
  )}
}
