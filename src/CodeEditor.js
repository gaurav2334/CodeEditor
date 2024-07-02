import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';                        //Importing the Editor component from the react-simple-code-editor library, which provides a simple code editor component for React.
import { highlight, languages } from 'prismjs/components/prism-core';   //Importing highlight and languages from prismjs/components/prism-core. Prism.js is a lightweight, extensible syntax highlighter.


import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';                   //Importing the CSS file for Prism.js themes to style the syntax highlighting.
import './CodeEditor.css';   // custom CSS  is used for general styling and layout.

const CodeEditor = () => {
  const [code, setCode] = useState('');   //nitializes the code state with an empty string. setCode is a function to update this state.

  const handleValueChange = (value) => {  //This function is called whenever the value in the code editor changes. It updates the code state with the new value.
    setCode(value);
  };

  return (                                  // return jsx 
    <div className="code-editor-container">
      <Editor
        value={code}
        onValueChange={handleValueChange}   // whenever it changes , handleValuechnage will get called 
        highlight={(code) => highlight(code, languages.js)}   // Uses the highlight function from Prism.js to apply syntax highlighting for JavaScript code.
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',   //inline CSS is used for specific styles that apply directly to the Editor component.
          fontSize: 12,
        }}
      />
    </div>
  );
};

export default CodeEditor;



