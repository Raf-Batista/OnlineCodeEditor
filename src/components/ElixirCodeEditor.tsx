import React from 'react';
import MonacoEditor from '@monaco-editor/react';

const ElixirCodeEditor = () => {
    return (
        <div>
            <MonacoEditor height="500px" language="elixir" />
        </div>
    )
}

export default ElixirCodeEditor;
