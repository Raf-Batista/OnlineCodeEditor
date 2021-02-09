import React from 'react'
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const JavaScriptCodeEditor:React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {

    const handleEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });

        monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
    };

    return (
        <div>
            <button>Format</button>
            <MonacoEditor 
                height="500px"   
                editorDidMount={handleEditorDidMount} 
                value={initialValue}        
                language="javascript" 
                theme="dark" 
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 24,
                    scrollBeyondLastLine: false,
                    automaticLayout: true
            }}/>
        </div>
    )
}

export default JavaScriptCodeEditor;
