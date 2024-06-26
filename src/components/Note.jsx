import React from "react";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        Delete
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
