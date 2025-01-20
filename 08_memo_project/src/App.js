import './App.css';
import Sidebar from './components/Sidebar';
import MemoContainer from './components/MemoContainer';
import { useState } from 'react';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 1737346157874,
      updatedAt: 1737346168889,
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1737346157878,
      updatedAt: 1737346168890,
    },
  ]);
  return (
    <div className="App">
      <Sidebar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
