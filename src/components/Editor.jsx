import React from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      defaultValue: 
      `(async function respond (inputText) {
        var language = 'French';
        var transalatedOutPut = await axios.get('https://reqres.in/api/users/2');
        
        return  "Oh in french that is" + transalatedOutPut.data.data.email;
    })`
    }
  }
   editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
    localStorage.setItem('code', '');
    editor.focus();
  }
  onChange = (newValue, e) => {
    console.log('onChange', newValue, e);
    localStorage.setItem('code', newValue);
  }
  onSubmit = (editor, monaco) => {
    const model = editor.getModel();
    const value = model.getValue();
    alert(value);
  }
  render() {
    const {code, defaultValue} = this.state;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <>
      <MonacoEditor
        width="1200"
        height="600"
        language="typescript"
        theme="vs-dark"
        defaultValue='//type your code here'
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
      {/* <button onClick={this.onSubmit}>Check here</button> */}
      </>
    );
  }
}

export default Editor;