import "./EmotionItem.css"
import { getEmotionImages } from "../util/get-emotion-image"

const EmotionItem = ({emotionId, emotionName, isSelected}) => {
  return (
    <div className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}>
        <img className="emotion_img" src={getEmotionImages(emotionId)} alt="" />
        <div className="emotion_name">{emotionName}</div>
    </div>
  )
}

export default EmotionItem