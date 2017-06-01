import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote, deleteNote } from '../actions/notes';

class Note extends Component {
  state = { edit: false }

	updateNote = () => {
		
	}

  toggleEdit = () => {
		let { dispatch, note, title, body, form } = this.props;
    dispatch(updateNote(note._id, note.title, note.body));
    this.setState({ edit: !this.state.edit });
  }

  deleteNote = () => {
    let { dispatch, note, history } = this.props;
    dispatch(deleteNote(note._id));
		history.push('/notes')
  }

  render() {
    let { note: { title, body, updatedAt, createdAt }} = this.props;
    return (
      <div className="container">
        <h4 className="center">{title}</h4>
        <span className="grey-text">{`Created: ${createdAt}`}</span>
        <br />
        <span className="grey-text">{`Updated: ${updatedAt}`}</span>
        <p>{body}</p>
        <div style={{ cursor: 'pointer' }}>
          <i className="blue-text material-icons" onClick={this.toggleEdit}>edit</i>
          <i className="red-text material-icons" onClick={this.deleteNote}>delete</i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n._id === props.match.params.id) || {} }
}

export default connect(mapStateToProps)(Note);