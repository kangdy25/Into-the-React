import './List.css'
import { TodoStateContext } from '../App'
import TodoItem from './TodoItem'
import { useMemo, useState, useContext } from 'react'

const List = () => {
  const todos = useContext(TodoStateContext)
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if (search === "") return todos;

    return todos.filter((todo) => 
      todo.content
        .toLowerCase()    
        .includes(search.toLowerCase()))
  }

  const filteredTodos = getFilteredData();

  const {totalCount, doneCount, notDoneCount} = useMemo(() => {
    console.log("");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {totalCount, doneCount, notDoneCount}
  }, [todos])

  return (
    <div className='List'>
      <h4>TODO LIST 🌱</h4>
      <input 
        value={search}
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요' 
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo}/>
        })}
      </div>
    </div> 
  )
}

export default List