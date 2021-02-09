import { ResizableBox } from 'react-resizable'; 
import './Resizable.css';

interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    return <ResizableBox 
    height={300} 
    width={Infinity} // react-resizable doesn't take percentage and we want it to take up as much width as it can
    resizeHandles={['s']}
    >{children}</ResizableBox>
};

export default Resizable;