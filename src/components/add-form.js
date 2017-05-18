import React from 'react';

export default function AddForm(props) {
  return(
    <form className="form">
      <h4>Add a Memory</h4><br></br>
      <p className="add-info">Keep track of all the fun and amazing places you have been.</p>
      <input placeholder="place"></input><br></br>
      <input placeholder="time"></input><br></br>
      <input className="notes" placeholder="notes"></input><br></br>
      <button className="save" onClick={() => this.setEditing(false)}>Save</button>
    </form>
  );
  }
