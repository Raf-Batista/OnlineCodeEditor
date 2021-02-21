import './CodeCell.css';
import { useState, useEffect } from 'react'; 
import { JavaScriptCodeEditor, Preview, Resizable, RubyCodeEditor} from '../';
import { Cell } from '../../state';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useCumulativeCode } from '../../hooks/useCumulativeCode';
import saveCode from '../../hooks/saveCode';

interface CodeCellProps {
    cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const [codeType, setCodeType] = useState('javascript');

    const { updateCell, createBundle } = useActions();
    const bundle = useTypedSelector((state) => state.bundles[cell.id]);
    const cumulativeCode = useCumulativeCode(cell.id);
    const codeState = useTypedSelector((state) => state.cells);

    useEffect(() => {
        if (!bundle) {
            createBundle(cell.id, cumulativeCode);
            return;
        };

        const timer = setTimeout(async () => {  
            createBundle(cell.id, cumulativeCode)
        }, 1000);

        return () => {
            clearTimeout(timer);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cumulativeCode, cell.id, createBundle]);

    return (
        <Resizable direction="vertical">
            <div style={{ height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row'}}>
                <Resizable direction="horizontal">
                    {
                        codeType === 'javascript' 
                        ? <JavaScriptCodeEditor 
                        initialValue={cell.content}
                        onChange={(value) => updateCell(cell.id, value)} />
                        : <RubyCodeEditor 
                        initialValue={cell.content}
                        onChange={(value) => updateCell(cell.id, value)} />
                    }
                    
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
            </div>
        </Resizable>   
    );
};

export default CodeCell;