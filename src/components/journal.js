import React from 'react';
import AddMemory from './new-memory';
import OldMemory from './old-memory';
//import AddForm from './add-form';

export default class Journal extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {
  return(
    <div className="container">
      <p>A journal that allows the user to document their travels and look back and see where they have been.</p>
      <AddMemory />
      <br></br>
      <OldMemory />
    </div>
  )}
}
