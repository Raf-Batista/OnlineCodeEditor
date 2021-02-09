import './CodeEditor.css';
import React, { useRef } from 'react'
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { editor } from 'monaco-editor';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const JavaScriptCodeEditor:React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {

    const editorRef = useRef<any>();

    const handleEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        editorRef.current = monacoEditor;
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });

        monacoEditor.getModel()?.updateOptions({ tabSize: 2 });
    };

    const handleClick = () => {
        const unformated = editorRef.current.getModel().getValue();

        const formatted = prettier.format(unformated, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true
        }).replace(/\n$/, '');

        editorRef.current.setValue(formatted);
    };

    return (
        <div className="editor-wrapper">
            <button className="button button-format is-primary is-small" onClick={handleClick}>Format</button>
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
