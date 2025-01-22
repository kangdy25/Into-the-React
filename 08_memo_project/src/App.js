import './App.css';
import Sidebar from './components/Sidebar';
import MemoContainer from './components/MemoContainer';
import { useCallback, useState } from 'react';
import { getItem, setItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debounceSetItem = debounce(setItem, 3000);

function App() {
  const [memos, setMemos] = useState(getItem('memo') || []);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos[selectedMemoIndex] = newMemo;
        debounceSetItem('memo', newMemos);

        return newMemos;
      });
    },
    [selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const newMemos = [
        ...memos,
        {
          title: 'Untitled',
          content: '',
          createdAt: new Date().getTime(),
          updatedAt: new Date().getTime(),
        },
      ];
      debounceSetItem('memo', newMemos);

      return newMemos;
    });
    setSelectedMemoIndex(memos.length);
  }, [memos]);

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        debounceSetItem('memo', newMemos);

        return newMemos;
      });
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex],
  );

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
