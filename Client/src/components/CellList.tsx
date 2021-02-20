import './CellList.css';
import { useEffect, Fragment } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions'
import CellListItem from './CellListItem';
import AddCell from './AddCell';
import fetchUserCode from '../hooks/fetchUserCode'

const CellList: React.FC = () => {

    const cells = useTypedSelector(({ cells: { order, data } }) => {
        return order.map((id) => {
            return data[id];
        });
    });

    const renderedCells = cells.map((cell) => 
    <Fragment key={cell.id}>
        <CellListItem cell={cell} /> 
        <AddCell previousCellId={cell.id} />
    </Fragment>);

    return (
        <div className="cell-list">
            <AddCell previousCellId={null} />
            {renderedCells} 
        </div>
    )
}

export default CellList;
