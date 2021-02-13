import { useTypedSelector } from '../hooks/useTypedSelector';
import CellListItem from './CellListItem';

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

    console.log('current state of store', useTypedSelector((state) => state))


    console.log('CellList component', cells)

    const renderedCells = cells.map((cell) => <CellListItem key={cell.id} cell={cell} />);

    return (
        <div>
            {renderedCells}
        </div>
    )
}

export default CellList;
