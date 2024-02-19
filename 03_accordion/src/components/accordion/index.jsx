import { useState } from "react"
import data from "./data";
import './styles.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

        if (findIndexOfCurrentId  === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        
        setMultiple(cpyMultiple)
    }

    return (<div className="wrapper">
        <button onClick={()=>{setEnableMultiSelection(!enableMultiSelection)}}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ? 
                data.map(a=>{
                    return (
                        <div className="item" key={a.id}>
                            <div 
                            onClick={
                                enableMultiSelection
                                ? ()=>{handleMultiSelection(a.id)}
                                : ()=>{handleSingleSelection(a.id)}
                            } 
                            className="title"
                            >
                                <h3>{a.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection 
                                ? multiple.indexOf(a.id) !== -1 && (
                                    <div className="content">{a.answer}</div>
                                )
                                : selected === a.id && (
                                    <div className="content">{a.answer}</div>
                                )
                            }
                            
                            {/* {
                                selected === a.id || 
                                multiple.indexOf(a.id) !== -1 ?
                                <div className="content">{a.answer}</div>
                                : null
                            } */}
                        </div>
                    )   
                })
                : <div>No Data Found!</div>
            }
        </div>

    </div>)
}