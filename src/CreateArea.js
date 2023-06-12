import React, { useState } from "react";
import "./styles.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="container">
      <form className="form">
        <input
          className="input"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          className="textarea"
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button className="button" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
