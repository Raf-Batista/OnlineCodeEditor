import { useState } from 'react'; 
import JavaScriptCodeEditor from './JavaScriptCodeEditor';
import RubyCodeEditor from './RubyCodeEditor';
import ElixirCodeEditor from './ElixirCodeEditor';
import Preview from './Preview';
import bundle from '../bundler'

const CodeCell = () => {
  
    const [input, setInput] = useState(''); 
    const [code, setCode] = useState('');

    const handleClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
        <div>
            <JavaScriptCodeEditor 
                initialValue="const a = 1;"
                onChange={(value) => setInput(value)}
            />
            <div>
                <button onClick={handleClick}>Submit</button>
            </div>
            <Preview code={code}/>
            {/* <RubyCodeEditor />
            <ElixirCodeEditor /> */}
        </div>
    );
};

export default CodeCell;