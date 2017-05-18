import React from 'react';

export default function AddForm(props) {
  return(
    <form className="form">
      <h4>Add a Memory</h4><br></br>
      <input placeholder="place"></input><br></br>
      <input placeholder="time"></input><br></br>
      <input placeholder="notes"></input><br></br>
      <button className="save" onClick={() => this.setEditing(false)}>Save</button>
    </form>
  );
  }
