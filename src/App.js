import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";
import Editor from "./components/Editor";
import Editor2 from "./components/Editor.v2";
import "@progress/kendo-theme-default/dist/all.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Editor className="editor" />
        <Chat className="chat" />
      </div>x
    </div>
  );
}

export default App;
