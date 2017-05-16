import React from 'react';
import AddMemory from './new-memory';
import OldMemory from './old-memory';
import AddForm from './add-form';

export default class Journal extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
  return(
    <div className="container">
      <h3>A Journey of Life</h3>
      <p>A journal that allows the user to document their travels and look back and see whwere they have been.</p>
      <AddMemory />
      <br></br>
      <OldMemory />
    </div>
  )}
}
