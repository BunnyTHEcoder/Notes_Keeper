import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = React.useState([]);

  function addNote(ne) {
    setArr((prev) => {
      return [...prev, ne];
    });
  }
  function deleteN(id) {
    setArr((prev) => {
      return prev.filter((val, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addKr={addNote} />
      {arr.map((val, index) => {
        return (
          <Note
            deleteKr={deleteN}
            key={index}
            id={index}
            content={val.content}
            title={val.title}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
