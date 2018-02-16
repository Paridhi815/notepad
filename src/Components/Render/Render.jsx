import React from 'react';
import ReactDOM from 'react-dom';
import './Render.css';
import Header from '../Header/Header';
import Board from '../Board/Board';

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 120,
      content: '',
      inputState: '',
      titleContent: '',
      notes: [],
      homepage: true,
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


  // <div className="container">
  //   <Header
  //     headerText="Start Taking Notes"
  //   />
  //   <Board />
  //   <Header
  //     headerText="About Us"
  //   />
  // </div>

  render() {
    if (this.state.homepage) {
      return (
        <div
          className="Container"
        >
          <Header
            headerText="Start Taking Notes"
          />
          <Board
            updateTitle={receivedTitle => this.updateTitle(receivedTitle)}
            titleText={this.state.titleContent}
            updateFunction={content => this.updateContent(content)}
            content={this.state.content}
            inputClass={this.state.inputState}
            remainingChars={this.state.count}
            saveNote={() => this.saveNote()}
          />
          <Header
            headerText="About Us"
          />
        </div>
      );
    }
    // return (
    //   <div className="Container">
    //     <Header
    //       headerText="Saved Notes"
    //     />
    //     <PanelList
    //       notes={JSON.stringify(this.state.notes)}
    //     />
    //     <Header>
    //       <button
    //         className="Container-createnewnote-button"
    //         onClick={() => this.setState({ homepage: true })}
    //       >Create new Note
    //       </button>
    //     </Header>
    //   </div>
    // );
  }
}

export default Container;

ReactDOM.render(<Container />, document.getElementById('root'));
