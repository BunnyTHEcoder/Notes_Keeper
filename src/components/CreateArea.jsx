import React from "react";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import Fab from '@mui/material/Fab';


function CreateArea(props) {
  const [isExpanded, changeExpanded] = React.useState(false);
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
      <form className="create-note">
      {isExpanded && (
        <input
          name="title"
          onChange={inputChange}
          placeholder="Title"
          value={inputTex.title}
        />
        )}
        <textarea
          name="content"
          onChange={inputChange}
          value={inputTex.content}
          placeholder="Take a note..."
          onClick={() => {
            changeExpanded(() => true);
          }}
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded && (
        <Fab onClick={addNot}><AddTwoToneIcon/></Fab> )}
      </form>
    </div>
  );
}

export default CreateArea;
