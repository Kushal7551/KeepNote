import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function addNote(newnote) {
    setnotes((prevnotes) => {
      return [...prevnotes, newnote];
    });
  }
  function deletenote(id) {
    setnotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addOn={addNote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            Delete={deletenote}
            title={noteitem.title}
            content={noteitem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
