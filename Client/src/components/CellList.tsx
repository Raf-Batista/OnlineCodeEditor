import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CellListItem from './CellListItem';
import AddCell from './AddCell';

import { useDispatch } from 'react-redux'
import { ActionType } from '../state/action-types'
import { useEffect } from 'react'

const CellList: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch({
            type: ActionType.INSERT_CELL_BEFORE,
            payload: {
              id: null,
              type: 'javascript'
            }
        })

        dispatch({
            type: ActionType.INSERT_CELL_BEFORE,
            payload: {
              id: null,
              type: 'text'
            }
        })

        dispatch({
            type: ActionType.INSERT_CELL_BEFORE,
            payload: {
              id: null,
              type: 'javascript'
            }
        })

        dispatch({
            type: ActionType.INSERT_CELL_BEFORE,
            payload: {
              id: null,
              type: 'text'
            }
        })
    }, [])


    const cells = useTypedSelector(({ cells: { order, data } }) => {
        return order.map((id) => {
            return data[id];
        });
    });

    const renderedCells = cells.map((cell) => 
    <Fragment key={cell.id}>
        <AddCell nextCellId={cell.id} />
        <CellListItem cell={cell} /> 
    </Fragment>);

    return (
        <div>
            {renderedCells}
            <AddCell nextCellId={null} />
        </div>
    )
}

export default CellList;
