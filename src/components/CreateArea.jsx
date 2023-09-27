import React from "react";

function CreateArea(props) {
  const [inputTex, setInputText] = React.useState({
    title: "",
    content: ""
  });

  function inputChange(e) {
    const { name, value } = e.target;
    setInputText((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function addNot(x) {
    props.addKr(inputTex);
    x.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={inputChange}
          placeholder="Title"
          value={inputTex.title}
        />
        <textarea
          name="content"
          onChange={inputChange}
          value={inputTex.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNot}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
