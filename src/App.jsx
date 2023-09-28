import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Notes from "./notes";


function card(pr) {
  return <Note key={pr.key} title={pr.title} content={pr.content} />;
}
function App() {
  return (
    <div>
      <Header />
      {Notes.map(card)}
      <Footer />
    </div>
  );
}

export default App;
