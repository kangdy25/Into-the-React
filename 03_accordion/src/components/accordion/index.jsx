import { useState } from "react"
import data from "./data";
import './styles.css'

export default function Accordian() {
    const [selected, setSelected] = useState(0);
    
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId)
    }

    return (<div className="wrapper">
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(a=>{
                    return (
                        <div className="item" key={a.id}>
                            <div 
                            onClick={()=>{handleSingleSelection(a.id)}} 
                            className="title"
                            >
                                <h3>{a.question}</h3>
                                <span>+</span>
                            </div>
                            
                            {
                                selected === a.id ?
                                <div className="content">{a.answer}</div>
                                : null
                            }
                        </div>
                    )   
                })
                : <div>No Data Found!</div>
            }
        </div>

    </div>)
}