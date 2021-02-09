import 'bulmaswatch/superhero/bulmaswatch.min.css';
import './main.css';
import * as esbuild from 'esbuild-wasm';
import { useState, useEffect, useRef } from 'react'; 
import ReactDOM from 'react-dom'; 
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import JavaScriptCodeEditor from './components/JavaScriptCodeEditor';
import RubyCodeEditor from './components/RubyCodeEditor';
import ElixirCodeEditor from './components/ElixirCodeEditor';
import Preview from './components/Preview';

const App = () => {
    const ref = useRef<any>();
  
    const [input, setInput] = useState(''); 
    const [code, setCode] = useState('');

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true, 
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
        });
    };

    useEffect(() => {
        startService();
    }, []);

    const handleClick = async () => {
        if(!ref.current) return; 
        
        const result = await ref.current.build({
            entryPoints: ['index.js'], 
            bundle: true, 
            write: false, 
            plugins: [
                unpkgPathPlugin(),
                fetchPlugin(input)
            ],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window'
            }
        });

        setCode(result.outputFiles[0].text);
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

ReactDOM.render(<App />, document.querySelector('#root'))