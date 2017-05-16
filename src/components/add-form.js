import React from 'react';

export default function AddForm(props) {
    return(
      <form className="form hide">
        <h5>Add a Memory</h5>
        <input placeholder="Place"></input>
        <input placeholder="time"></input>
        <input placeholder="notes"></input>
      </form>
    );
  }
