'use client'
import { useState } from "react";
export default function Counter_Website(){
    const [count,setCount] = useState(0);
    const increment_count= ()=>{
        setCount((count)=>{
            return count + 1;
        })
    }
    const decrement_count= ()=>{
        if(count>0){
            setCount((count)=>{
                return count - 1;
            })
        }
        else{
            alert("Cannot be decrease below zero");
        }
    }
    const reset_button = () =>{
        setCount((count)=>{
            return count - count;
        })
    }
    return (
        <>
        <div className="Header">
            <h1>Counter Website</h1>
        </div>

        <div className="Counter_displays">
            <div className="Counter_display1">
                <button onClick={increment_count} id="add_button"> + </button>
                <div className="counter_val">
                    <p>{count}</p>
                </div>
                <button onClick={decrement_count} id="substract_button"> - </button>
                
            </div>
            <div className="Counter_display2">
            <button onClick={reset_button}>Reset</button>
            <a href="http://localhost:3000/"><button>Home</button></a>
            </div>
        </div>
        </>
    );
}