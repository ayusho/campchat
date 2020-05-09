import React, { useState } from "react";
import ReactDOM from "react-dom";
 
import Editor from "@monaco-editor/react";
// import { FillSpinner as Loader } from "react-spinners-kit";
 
// import examples from "./examples";
 
function Editor2() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("javascript");
  const [isEditorReady, setIsEditorReady] = useState(false);
 
  function handleEditorDidMount() {
    setIsEditorReady(true);
  }
 
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
 
  function toggleLanguage() {
    setLanguage(language === "javascript" ? "python" : "javascript");
  }
 
  return (
    <div className="outer">
      {/* <button onClick={toggleTheme} disabled={!isEditorReady}>
        Toggle theme
      </button> */}
      {/* <button onClick={toggleLanguage} disabled={!isEditorReady}>
        Toggle language
      </button> */}
 
      <Editor
        // By default, it fully fits with its parent
        theme="dark"
        language="javascript"
        // loading={<Loader />}
        value='// write your code below'
        editorDidMount={handleEditorDidMount}
        options={{ lineNumbers: "off" }}
      />
    </div>
  );
}

export default Editor2;