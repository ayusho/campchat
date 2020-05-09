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
      minimap: {
        enabled: false,
      },
      selectOnLineNumbers: true,
      wordWrap: "bounded",
      wrappingStrategy: "advanced",
      contextMenu: true,
      copyWithSyntaxHighlighting: true,
      fontSize: 15,
      formatOnType: true,
      colorDecorators: true,
    };
    return (
      <div className="outer">
        <MonacoEditor
          width="200"
          height="600"
          language="typescript"
          theme="vs-dark"
          // defaultValue="//type your code here"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          className="editor1"
        />
        <button className="btn" onClick={this.onApplyChanges}>
          <img
            alt="play icon"
            src="https://ai.campk12.com/static/media/refresh.b98fb345.svg"
          />
          <span> Apply Changes </span>
        </button>
      </div>
    );
  }
}

export default Editor;
