import { ReactNode } from "react";

//import { Fragment } from "react";
interface CardProps {
  children: ReactNode;
}
function Card(props: CardProps) {
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "25rem",
      }}
    >
      <div className="card-body">
        {/* <CardBody /> */}
        {children}
      </div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    // <Fragment>
    //   <h5 className="card-title">Card title</h5>
    //   <p className="card-text">
    //     Some quick example text to build on the card title and make up the bulk
    //     of the card's content.
    //   </p>
    //   <a href="#" className="btn btn-primary">
    //     Go somewhere
    //   </a>
    // </Fragment>
    //fragment

    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Hola mundo
      </a>
    </>
  );
}

export default Card;
