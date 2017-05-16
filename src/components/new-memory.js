import React from 'react';

export default class AddMemory extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        editing: false
      }
  }

  setEditing(editing) {
    this.setState({
      editing
    })
  }

  render() {
    if(this.state.editing) {
      return(
        <form className="form">
          <h4>Add a Memory</h4><br></br>
          <input placeholder="Place"></input><br></br>
          <input placeholder="time"></input><br></br>
          <input placeholder="notes"></input><br></br>
        </form>
      );
    }
      return (
        <button onClick = {() => this.setEditing(true)}>Make a Memory</button>
      );
  }
}
