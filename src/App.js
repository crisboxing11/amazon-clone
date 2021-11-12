import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
function App() {
  
return (
  <div className="app">
    <Router>
      <Routes>
      <Route path="/login">
         <Login />
         </Route>
      <Route path="/">
        <Header />
         <Home />
         </Route>
      </Routes>
    </Router>
  </div>
);
}
useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);
export default App;