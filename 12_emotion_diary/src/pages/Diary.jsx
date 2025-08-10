import { useParams } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"
import Viewer from "../components/Viewer";

const Diary = () => {
  const params = useParams();

  return (
    <div>
      <Header
        title={"yyyy-mm-dd 기록"}
        leftChild={<Button text={"< 뒤로 가기"} />} 
        rightChild={<Button text={"수정하기"} />} 
      />
      <Viewer />
    </div>
  )
}

export default Diary