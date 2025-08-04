import { useParams } from "react-router-dom"

const Edit = () => {
  const params = useParams();

  return (
    <div>{params.id}번 일기 수정되었어요~</div>
  )
}

export default Edit