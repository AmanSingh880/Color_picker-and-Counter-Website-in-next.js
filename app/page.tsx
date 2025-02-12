'use client';
import NavBar from "./(Component)/navbar/page";
import UrlNav from "./(Component)/urlNav/urlNav";
// import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // useEffect(()=>{
  //   alert("Hii")  
  // });
  return (
    <>
    <div className="Header">
      <NavBar Title="Home Page" />
    </div>
    <UrlNav />
    <div className="Header">
      <h2><Link href="/go"><button>Color Picker Website </button></Link></h2>
      <h2><Link href="/counter"><button> Counter Website </button> </Link></h2>
    </div>
    </>
  );
}
