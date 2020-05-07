import React from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: `
      /**
       * Enter your every-time code here.
       * This function will run every time when user performs some action.
       * You can remove "async" keyword if you don't have any await function inside this function
       */

      (async function respond (inputText) {
        var language = 'French';
        var transalatedOutPut = await axios.get('https://reqres.in/api/users/2');
        
        return  "Oh in french that is " + transalatedOutPut.data.data.email;
    })`,
    };
  }
  editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
    localStorage.setItem("code", this.state.code);
    editor.focus();
  };
  onChange = (newValue, e) => {
    console.log("onChange", newValue, e);
    this.setState({
      code: newValue,
    });
    // localStorage.setItem("code", newValue);
  };
  onSubmit = (editor, monaco) => {
    const model = editor.getModel();
    const value = model.getValue();
    alert(value);
  };
  onApplyChanges = () => {
    localStorage.setItem("code", this.state.code);
  };
  render() {
    const { code, defaultValue } = this.state;
    const options = {
      selectOnLineNumbers: true,
    };
    return (
      <>
        <MonacoEditor
          width="1200"
          height="600"
          language="typescript"
          theme="vs-dark"
          defaultValue="//type your code here"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <button className="btn" onClick={this.onApplyChanges}>
          Apply changes
        </button>
      </>
    );
  }
}

export default Editor;
