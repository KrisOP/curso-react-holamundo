import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};
const styles = {

  backgroundColor: 'red',
  
}
function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      style={styles}
      disabled={isLoading}
      onClick={onClick}
      type="button"
      className={`btn btn-${isLoading ? 'secondary' : 'primary'}`}
    >
      {isLoading ? "Cargando..." : children}{" "}
    </button>
  );
}

export default Button;
