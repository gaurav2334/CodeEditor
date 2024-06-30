import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { Prism } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/duotoneDark';import { highlight, languages } from 'prism-react-renderer';
import './CodeEditor.css';

// Add necessary Prism languages (optional, based on your needs)
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-markup');

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleValueChange = (value) => {
    setCode(value);
  };

  return (
    <div className="code-editor-container">
      <Editor
        value={code}
        onValueChange={handleValueChange}
        highlight={(code) => (
            <Prism
              code={code}
              language="javascript"
              theme={theme}
            >
              {({ tokens, getLineProps, getTokenProps }) => (
                <pre>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Prism>
          )}
          
        padding={10}
        className="code-editor"
      />
    </div>
  );
};

export default CodeEditor;
