'use client';
import NavBar from "../navbar/page";
import UrlNav from "../urlNav/urlNav";
import { PhotoshopPicker } from "react-color";
import { useState } from "react"; 
export default function Color_picker_fun(){
    const [color,setColor]=useState("#ff0000");
    const [copy,setCopy]=useState("Copy")
    const Handle_copy=()=>{
        navigator.clipboard.writeText(color);
        setCopy("Copied !")
    }
    return (
        <>
        <div className="Header">
            <NavBar Title="Color Picker Website" />
        </div>
        <UrlNav />
        <div className="Counter_display1">
            <p className="color_val">
                Selected Color: {color}
            </p>
            <button onClick={Handle_copy} className={(copy=="Copy")?"copy":"copied"}>{copy}</button>
        </div>
        <div className="Counter_display1">
            <PhotoshopPicker color={color} onChangeComplete={(color)=> setColor(color.hex)}/>
        </div>
        </>
    );

}