//import { Fragment } from "react";

function Card() {
  return (
    <div
      className="card"
      style={{
        width: "25rem",
      }}
    >
      <div className="card-body">
        <CardBody />
      </div>
    </div>
  );
}

export function CardBody() {
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
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}

export default Card;
