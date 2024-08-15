import "./createtodobutton.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("Hola mundo");
        console.log(event)
      }}
    >
      {" "}
      +
    </button>
  );
}

export default CreateTodoButton;
