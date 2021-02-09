import { useState } from 'react'; 
import JavaScriptCodeEditor from './JavaScriptCodeEditor';
import RubyCodeEditor from './RubyCodeEditor';
import ElixirCodeEditor from './ElixirCodeEditor';
import Preview from './Preview';
import bundle from '../bundler'
import Resizable from './Resizable';

const CodeCell = () => {
  
    const [input, setInput] = useState(''); 
    const [code, setCode] = useState('');

    const handleClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
        <Resizable direction="vertical">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row'}}>
                <JavaScriptCodeEditor 
                    initialValue="const a = 1;"
                    onChange={(value) => setInput(value)}
                />
                <Preview code={code}/>
                {/* <RubyCodeEditor />
                <ElixirCodeEditor /> */}
            </div>
        </Resizable>
        
    );
};

export default CodeCell;