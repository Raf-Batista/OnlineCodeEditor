import { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import './TextEditor.css';

const TextEditor: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState('# Header');

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                return;
            }

            setEditing(false);
        };

        document.addEventListener('click', listener, { capture: true });

        return () => {
            document.removeEventListener('click', listener, { capture: true });
        };
    }, []);

    if (editing) {
        return (
            <div ref={ref}>
                <MDEditor value={value} onChange={ (value) => setValue(value || '') } />
            </div>
        );
    };

    return (
        <div className="text-editor" onClick={() => setEditing(true)}>
            <MDEditor.Markdown  source={value} />
        </div>
    )
}

export default TextEditor;
