import React from 'react'
import MonacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const JavaScriptCodeEditor:React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {

    const handleEditorDidMount = (getValue: () => string, monacoEditor: any) => {
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });
    }

    return (
        <div>
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
