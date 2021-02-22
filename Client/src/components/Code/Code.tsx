// @ts-nocheck
import './Code.css';

interface CodeProps {
  code : {title: string}
}

const Code: React.FC<CodeProps> = ({ code, load }) => {
  
  const handleClick = () => {
    load(code.order, code.data)
  }

  return (
    <div className="code">
      <span onClick={handleClick}>{code && code.title}</span>
    </div>
  )
}

export default Code;
