import { useEffect, useState } from 'react';
import './App.css';

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
    
    function randomColorUtility(len) {
        return Math.floor(Math.random() * len);
    }

    function handleCreateHexRandomColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRGBRandomColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(()=>{
      if (typeOfColor === 'rgb') handleCreateRGBRandomColor()
      else handleCreateHexRandomColor()
    }, [typeOfColor])

    return (
        <div className="container"
        style={{width: "100vw",
          height: "100vh", 
          background: color,
          textAlign: "center",}}>
            <button onClick={()=>{
              setTypeOfColor('hex')
            }}>Create HEX Color</button>
            <button onClick={()=>{
              setTypeOfColor('rgb')
            }}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateHexRandomColor : handleCreateRGBRandomColor}>Generate Random Color</button>
            <div style={{
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
                color : '#fff',
                fontSize : '60px',
                marginTop : '50px',
                flexDirection : 'column',
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                
                <h1>{color}</h1>
            </div>
        </div>
    );
}

