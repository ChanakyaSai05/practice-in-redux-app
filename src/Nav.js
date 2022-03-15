import React from "react";
import NavItem from "./NavItem";

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav">
        <NavItem title="ADD USER" />
        <NavItem title="USER LIST" />
        <NavItem title="PRODUCT" />
        <NavItem title="PRODUCT LIST" />
      </div>
    </div>
  );
}

export default Nav;
