import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  
  function handleChangeColor(){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); 
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
    
      <Child onChangeColor={handleChangeColor}/>
      <Child onChangeColor={handleChangeColor}/>
    </div>
  );
}
// Deliverable 1: when either child is clicked, parent changes color
// pass handleChangeColor as a PROP to both child components
// child's onChangeColor's function is SAME function obj as parent's handleChangeColor
export default Parent;
