import { useState, useRef, useContext } from 'react'
import { TodoDipatchContext } from '../App';
import './Editor.css'

const Editor = () => {
  const { onCreate } = useContext(TodoDipatchContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    };
    onCreate(content);
    setContent("")
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  }

  return (
    <div className='Editor'>
      <input 
        ref={contentRef}
        value={content} 
        onKeyDown={onKeyDown}
        onChange={onChangeContent} 
        placeholder='새로운 TODO'
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor