import { useSearchParams } from "react-router-dom"

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("value"));

  const updateQuery = () => {
    setSearchParams({ value: '4', filter: 'active' });
  };

  return (
    <>
      <div>Home</div>
      
      <p>현재 value: {searchParams.get('value')}</p>
       <button onClick={updateQuery}>쿼리 변경</button>
    </>
  )
}

export default Home