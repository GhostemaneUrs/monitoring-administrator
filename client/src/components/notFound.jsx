import React, { Fragment } from "react";
import notNotFoundImg from "../img/404.jpg";

const NotFound = () => {
  return (
    <Fragment>
      <div className="align-items-center justify-content-center d-flex error404">
        <img src={notNotFoundImg} alt="404 NotFound" className="error_Image" />
      </div>
    </Fragment>
  );
};

export default NotFound;
