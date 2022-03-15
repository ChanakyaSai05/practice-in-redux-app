// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import { increment, decrement } from "./actions";
// import axios from "axios";
// import List from "./List";
// import Navbar1 from "./Navbar1";
// import InputForm from "./InputForm";
// import { useState, useEffect } from "react";

// function App() {
//   const counter = useSelector((state) => state.counter);
//   const isLogged = useSelector((state) => state.isLogged);
//   const dispatch = useDispatch();
//   const [books, setBooks] = useState([]);
//   const getBooks = async () => {
//     const url = "http://localhost:3000/books";
//     await axios
//       .get(url)
//       .then((result) => setBooks(result))
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getBooks();
//   }, []);
//   return (
//     <div>
//       <div>
//         <h1>The count is:{counter}</h1>
//         <button onClick={() => dispatch(increment(5))}>+</button>
//         <button onClick={() => dispatch(decrement())}>-</button>
//         {isLogged ? <h1>some valuable info </h1> : ""}
//       </div>

//       <div>
//         <Navbar1 state={books} />
//         <div style={{ display: "flex" }}>
//           <List state={books} />
//           <InputForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./features/userSlice";
// import LoginData from "./LoginData";
//function App() {
// const nameref = useRef();
// const emailref = useRef();
// const dispatch = useDispatch();
// const pushData = (e) => {
//   e.preventDefault();
//   let name = nameref.current.value;
//   let email = emailref.current.value;
//   dispatch(
//     login({
//       user_name: name,
//       user_email: email,
//     })
//   );
//   nameref.current.value = "";
//   emailref.current.value = "";
// };

//   const nameref = useRef();
//   const emailref = useRef();
//   const dispatch = useDispatch();
//   const pushData = (e) => {
//     e.preventDefault();
//     let name = nameref.current.value;
//     let email = emailref.current.value;
//     dispatch(
//       login({
//         user_name: name,
//         user_email: email,
//       })
//     );
//     nameref.current.value = "";
//     emailref.current.value = "";
//   };
//   return (
//     <div>
//       <h1>Redux</h1>
//       <form>
//         <label>Name:</label>
//         <input type="text" ref={nameref} />
//         <label>Email:</label>
//         <input type="text" ref={emailref} />
//         <button type="submit" onClick={pushData}>
//           Submit
//         </button>
//       </form>
//       <LoginData />
//     </div>
//   );
//}

//export default App;

//class on 11/03/22
// import React, { createContext, useReducer } from "react";
// import Mar11Value from "./Mar11Value";
// export const countContext = createContext();
// const initialState = 0;
// //reducers
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <countContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div className="app">
//         <Mar11Value />
//       </div>
//     </countContext.Provider>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const getData = () => {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//       .then((res) => res.json())
//       .then((response) => setData(response));
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div>
//       <h1>Api</h1>
//       {data.map((item, index) => (
//         <>
//           <h1>title:{item.title}</h1>
//           <h2>userId:{item.userId}</h2>
//           <h2>id:{item.id}</h2>
//         </>
//       ))}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adduser from "./components/adduser/Adduser";
import Product from "./components/product/Product";
import Productlist from "./components/productlist/Productlist";
import Userlist from "./components/userlist/Userlist";
import Usernav from "./components/usernav/Usernav";
function App() {
  return (
    <BrowserRouter>
      <Usernav />
      <Routes>
        <Route path="/" element={<Adduser />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<Productlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
