import './AddCell.css';
import { useActions } from '../../hooks/useActions';

interface AddCellProps {
    previousCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId }) => {
    const { insertCellAfter } = useActions();
    return (
        <div className="add-cell">
            <div className="add-buttons">
                <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(previousCellId, 'javascript')}>
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Code</span>
                </button>
            
                <button className="button is-rounded is-primary is-small" onClick={() => insertCellAfter(previousCellId, 'text')}>
                <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Text</span>
                </button>
            </div>
            <div className="divider">&nbsp;</div>
        </div>
    )
};

export default AddCell;
