import './App.css';
import Sidebar from './components/Sidebar';
import MemoContainer from './components/MemoContainer';
import { useState } from 'react';
import { getItem, setItem } from './lib/storage';

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);

    setItem('memo', newMemos);
  };

  const addMemo = () => {
    const newMemos = [
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: new Date().getTime(),
        updatedAt: new Date().getTime(),
      },
    ];

    setMemos(newMemos);
    setSelectedMemoIndex(memos.length);

    setItem('memo', newMemos);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
    if (index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
    setItem('memo', newMemos);
  };

  return (
    <div className="App">
      <Sidebar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
