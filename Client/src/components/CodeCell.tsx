import { useEffect } from 'react'; 
import JavaScriptCodeEditor from './JavaScriptCodeEditor';
import RubyCodeEditor from './RubyCodeEditor';
import ElixirCodeEditor from './ElixirCodeEditor';
import Preview from './Preview';
import Resizable from './Resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface CodeCellProps {
    cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const { updateCell, createBundle } = useActions();
    const bundle = useTypedSelector((state) => state.bundles[cell.id]);

    useEffect(() => {
        const timer = setTimeout(async () => {  
            createBundle(cell.id, cell.content)
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [cell.content, cell.id])

    return (
        <Resizable direction="vertical">
            <div style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row'}}>
                <Resizable direction="horizontal">
                    <JavaScriptCodeEditor 
                        initialValue={cell.content}
                        onChange={(value) => updateCell(cell.id, value)}
                    />
                </Resizable>
                {bundle && <Preview code={bundle.code} error={bundle.error} />}
                {/* <RubyCodeEditor />
                <ElixirCodeEditor /> */}
            </div>
        </Resizable>   
    );
};

export default CodeCell;