import "./Viewer.css"
import { getEmotionImages } from "../util/get-emotion-image"
import { emotionList } from "../util/constants"

const Viewer = () => {
  const emotionId = 5;
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  return (
    <div className="Viewer">
        <section className="img_section">
            <h4>오늘의 감정</h4>
            <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                <img src={getEmotionImages(emotionId)} alt="" />
                <div className="">{emotionItem.emotionName}</div>
            </div>
        </section>
        <section className="content_section"></section>
    </div>
  )
}

export default Viewer