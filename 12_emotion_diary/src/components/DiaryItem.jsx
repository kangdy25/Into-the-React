import './DiaryItem.css'
import {getEmotionImages} from '../util/get-emotion-image'
import Button from './Button'

const DiaryItem = ({id, emotionId, createdDate, content}) => {

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImages(emotionId)} alt="" />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"}/>
      </div>
    </div>
  )
}

export default DiaryItem