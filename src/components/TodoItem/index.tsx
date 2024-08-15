import "./todoitem.css";
interface TodoItem {
  text: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
}

function TodoItem(props: TodoItem) {
  const { text, completed, onComplete, onDelete } = props;
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete"
      onClick={onDelete}
      >X</span>
    </li>
  );
}

export { TodoItem };
