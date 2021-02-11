import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const RubyCodeEditor = () => {
    return (
        <div>
            <MonacoEditor height="500px" language="ruby" />
        </div>
    )
}

export default RubyCodeEditor;
