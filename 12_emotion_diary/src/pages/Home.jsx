import { useSearchParams } from "react-router-dom"

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("value"));
  
  return (
    <>
      <div>Home</div>
    </>
  )
}

export default Home