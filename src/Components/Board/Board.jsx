import React from 'react';
import Top from '../Title/Top';
import Task from '../TitleContent/Task';
import Note from '../Note/Note';
import Bottom from '../NoteActions/Bottom';
import './Board.css';

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 120,
      content: '',
      inputState: '',
      titleContent: '',
      notes: [],
    };
  }

  updateContent=(event) => {
    let text = event.target.value;
    if (text.length > 119) {
      text = event.target.value.slice(0, 120);
      this.setState({
        inputState: 'danger',
      });
    } else {
      this.setState({
        inputState: '',
      });
    }
    this.setState({
      content: text,
      count: 120 - text.length,
    });
  }

  titleContentSave=(event) => {
    this.setState({
      titleContent: event.target.value,
    });
  }

  saveNote=() => {
    const note = {
      title: this.state.titleContent,
      content: this.state.content,
    };
    const { notes } = this.state;
    notes.push(note);
    this.setState({
      notes,
      titleContent: '',
      content: '',
      count: 120,
    });
    console.log(this.state.notes);
  }

  render() {
    return (
      <div className="board">
        <Top
          titleText="Note Title"
          buttonText="en"
        />
        <Task
          titleContent={event => this.titleContentSave(event)}
          title={this.state.titleContent}
        />
        <Note
          displayValue={this.state.content}
          update={event => this.updateContent(event)}
          inputState={this.state.inputState}
        />
        <Bottom
          buttonText="Save"
          remaining={this.state.count}
          save={() => this.saveNote()}
        />
      </div>
    );
  }
}

export default Board;

