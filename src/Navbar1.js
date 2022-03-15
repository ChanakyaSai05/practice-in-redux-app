import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Navbar } from "reactstrap";
import { search } from "./actions";

export default function Navbar1() {
  const dispatch = useDispatch();
  return (
    <Navbar
      className="bg-warning"
      style={{
        color: "white",
        padding: "14px",
        fontWeight: "bold",
        fontSize: "19px",
      }}
    >
      LIBRARY PORTAL
      <span>
        <Input
          type="text"
          placeholder="Search here"
          onChange={(e) => dispatch(search(e.target.value))}
        />
      </span>
    </Navbar>
  );
}
