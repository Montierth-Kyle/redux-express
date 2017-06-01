import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions/notes';

const EditNote = ({ dispatch }) => {
	let id;
  let title;
  let body;
  let form;

  return (
    <div>
      <h5 className="center">Edit Note</h5>
      <form
        ref={ n => form = n }
        onSubmit={ e => {
          e.preventDefault();
          dispatch(updateNote(id.value, title.value, body.value))
          form.reset();
        }}
      >
        <input ref={ n => title = n } placeholder="Title" />
        <textarea ref={ n => body = n } placeholder="Note Body"></textarea>
        <button className="btn">Save</button>
      </form>
    </div>
  )
}

export default connect()(EditNote);