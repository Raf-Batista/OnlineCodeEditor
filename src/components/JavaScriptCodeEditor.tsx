import React from 'react'
import MonacoEditor from '@monaco-editor/react';

const JavaScriptCodeEditor = () => {
    return (
        <div>
            <MonacoEditor height="500px" language="javascript" />
        </div>
    )
}

export default JavaScriptCodeEditor;
