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

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  };

  const addMemo = () => {
    setMemos([
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };

  return (
    <div className="App">
      <Sidebar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
