import './createtodobutton.css';

interface props {
  setOpenModal: (open: boolean | ((prevState: boolean) => boolean)) => void;
}

function CreateTodoButton(propsIn: props) {

  const { setOpenModal } = propsIn;

  return (
    <button
      className="CreateTodoButton"
      onClick={
        () => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
  );
}

export default  CreateTodoButton ;