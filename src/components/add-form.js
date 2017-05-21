import React from 'react';
import {saveData} from '../actions';

export default function AddForm(props) {

  return(
    <form className="form">
      <h4>Add a Memory</h4><br></br>
      <p className="add-info">Keep track of all the fun and amazing places you have been.</p>
      <input placeholder="place" ref={input => this.textInput = input}></input><br></br>
      <input placeholder="time" ref={input => this.textInput = input}></input><br></br>
      <input className="notes" placeholder="notes" ref={input => this.textInput = input}></input><br></br>
      <button className="save" onClick={() => this.saveData()}>Save</button>
    </form>
  );
}
