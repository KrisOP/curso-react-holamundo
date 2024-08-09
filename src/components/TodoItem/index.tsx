interface TodoItem {
  text: string;
  completed: boolean;
}

function TodoItem(props: TodoItem) {
  const { text, completed } = props;
  return (
    <li>
      <span>{completed}</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
