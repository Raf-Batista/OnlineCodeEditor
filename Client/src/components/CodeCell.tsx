import './CodeCell.css';
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
    const cumulativeCode = useTypedSelector((state) => {
        const { data, order } = state.cells;
        const orderedCells = order.map((id) => data[id]);

        const cumulativeCode = []; 
        for (let c of orderedCells) {
            if (c.type === 'javascript') {
                cumulativeCode.push(c.content);
            }; 
            if (c.id === cell.id) {
                break;
            }
        }
        return cumulativeCode;
    });

    useEffect(() => {
        if (!bundle) {
            createBundle(cell.id, cumulativeCode.join('\n'));
            return;
        };

        const timer = setTimeout(async () => {  
            createBundle(cell.id, cumulativeCode.join('\n'))
        }, 1000);

        return () => {
            clearTimeout(timer);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cumulativeCode.join('\n'), cell.id, createBundle]);

    return (
        <Resizable direction="vertical">
            <div style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row'}}>
                <Resizable direction="horizontal">
                    <JavaScriptCodeEditor 
                        initialValue={cell.content}
                        onChange={(value) => updateCell(cell.id, value)}
                    />
                </Resizable>
             
                <div className="progress-wrapper">
                    {!bundle || bundle.loading 
                    ? 
                    <div className="progress-cover">
                        <progress className="progress is-small is-primary" max="100">
                        Loading
                        </progress>
                    </div>            
                    : <Preview code={bundle.code} error={bundle.error} />
                    }
                </div>
                {/* <RubyCodeEditor />
                <ElixirCodeEditor /> */}
            </div>
        </Resizable>   
    );
};

export default CodeCell;