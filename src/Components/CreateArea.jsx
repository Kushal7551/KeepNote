import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function change(event) {
    const { name, value } = event.target;
    setnote((prevnote) => {
      return { ...prevnote, [name]: value };
    });
  }
  function clicked(events) {
    props.addOn(note);
    setnote({
      title: "",
      content: ""
    });
    events.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={change}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={change}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={clicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
