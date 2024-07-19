import './StarRating.css';
import {FaStar} from 'react-icons/fa'

export default function StarRating({noOfStars = 5}) {
    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index)=>{
                    return <FaStar
                    key={index}
                    
                    />
                })
            }
        </div>
    );
}
