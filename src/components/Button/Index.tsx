import { ReactNode } from "react";
import styles from "./Button.module.css";
import styled from "styled-components";



type BtnProps = {
  isLoading?: boolean;
  
}
const Btn = styled.button <BtnProps>`
  background-color: ${props => props.isLoading ? "rgb(173, 202, 255)" : "rgb(173, 202, 255)"};
  padding: 25px 30px;
`;

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};


function Button({ children, isLoading, onClick }: Props) {


  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.button,
    styles.padded,
  ].join(' ');


  return (
    // <button
    //   disabled={isLoading}
    //   onClick={onClick}
    //   type="button"
    //   //className={[styles.button, styles.padded].join(" ")}
    //   className={className}
    // >
    //   {isLoading ? "Cargando..." : children}{" "}
    // </button>

    <Btn
      disabled={isLoading}
      onClick={onClick}
      type="button"
      //className={[styles.button, styles.padded].join(" ")}
      className={className}
    >
      {isLoading ? "Cargando..." : children}{" "}
    </Btn>
    
  );
}

export default Button;
