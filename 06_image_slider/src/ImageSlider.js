import { useEffect, useState } from 'react';
import './ImageSlider.css';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

export default function ImageSlider({url, limit = 5, page = 1}) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrev() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide == images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(()=>{
        if (url !== "") fetchImages(url);
    }, [url]);
    
    console.log(images)

    if (loading) {
        return <div>Loading data!! Please wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error Occured! {errorMsg}</div>
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill 
                onClick={handlePrev}
                className="arrow arrow-left"
            /> 
            {
                images && images.length ?
                images.map((imageItem, i)=>(
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide == i ? 
                            'current-image' : 
                            'current-image hide-current-image'
                        }
                    />
                ))
                : null
            }
            <BsArrowRightCircleFill 
                onClick={handleNext}
                className="arrow arrow-right"
            />
            <span className='circle-indicators'>
                {
                    images && images.length ?
                    images.map((_, i)=>(
                        <button
                            key={i}
                            className={currentSlide == i ? 
                                'current-indicator' : 
                                'current-indicator inactive-indicator'
                            }
                            onClick={()=>{setCurrentSlide(i)}}
                        ></button>
                    ))
                    : null
                }
            </span>
        </div>
    );
}
