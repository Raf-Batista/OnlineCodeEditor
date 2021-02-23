import './CellListItem.css'
import { Cell } from '../../state';
import { ActionBar, CodeCell, TextEditor } from '../';

interface CellListItemProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
    let child: JSX.Element;
    if (cell.type === 'javascript') {
        child = <>
            <div className="action-bar-wrapper">
                <ActionBar id={cell.id} />  
            </div>
            <CodeCell cell={cell} />
            </>
    } else {
        child = <>
             <ActionBar id={cell.id} />
             <TextEditor cell={cell} />
            </>
    }
    return (
        <div className="cell-list-item">   
            {child}
        </div>
    )
}

export default CellListItem;
