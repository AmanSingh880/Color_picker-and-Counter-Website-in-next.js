'use client';

import { PhotoshopPicker } from "react-color";
import { useState } from "react"; 
export default function Color_picker_fun(){
    const [color,setColor]=useState("#ff0000");
    return (
        <>
        <div className="Header">
            <h1>Color Picker Website</h1>
        </div>
        <div className="Counter_display1">
            <p className="color_val">
                Selected Color: {color}
            </p>
        </div>
        <div className="Counter_display1">
            <PhotoshopPicker color={color} onChangeComplete={(color)=> setColor(color.hex)}/>
        </div>
        <div className="Counter_display2">
            <a href="http://localhost:3000/"><button>Home</button></a>
        </div>
        </>
    );

}