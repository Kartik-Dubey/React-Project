import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from "react";
import AddDetails from "./MyComponents/AddDetails";
import About from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initDetails;
  if (localStorage.getItem("todos") === null) {
    initDetails = [];
  } else {
    initDetails = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addDetail = (firstname, lastname, company) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const addEmployee = {
      sno: sno,
      Name: firstname,
      LastName: lastname,
      Company: company,
    };
    setTodos([...todos, addEmployee]);
  };

  const [todos, setTodos] = useState(initDetails);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Employee's Details" searchBar={false} />
        
        <Switch>
          <Route exact path="/" render={()=>{
          return(
            <>
              <AddDetails addDetail={addDetail} />
              <Todos todos={todos} onDelete={onDelete} />
            </> )
            }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
