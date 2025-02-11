'use client';
import NavBar from "./navbar/page";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    alert("Hii")  
  });
  return (
    <>
    <div className="Header">
      <h1><NavBar Title="Home Page" /></h1>
    </div>
    <div className="Header">
      <h2><a href="./go"><button>Color Picker Website </button></a></h2>
      <h2><a href="./counter"><button> Counter Website </button> </a></h2>
    </div>
    </>
  );
}
