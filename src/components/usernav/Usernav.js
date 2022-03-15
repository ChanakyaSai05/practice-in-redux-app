import React from "react";
import { Link } from "react-router-dom";
import "./Usernav.css";

function Usernav() {
  return (
    <div className="navItem">
      <div>
        <Link to={"/"} className="linkitem">
          ADD USER
        </Link>
      </div>
      <div>
        <Link to={"/userlist"} className="linkitem">
          USER LIST
        </Link>
      </div>
      <div>
        <Link to={"/product"} className="linkitem">
          PRODUCT
        </Link>
      </div>
      <div>
        <Link to={"/productlist"} className="linkitem">
          PRODUCT LIST
        </Link>
      </div>
    </div>
  );
}

export default Usernav;
