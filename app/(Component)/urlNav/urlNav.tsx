"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function UrlNav(){
    const path=usePathname();
    let a=false;
    let b=false;
    a=path.startsWith("/go");
    b=path.startsWith("/counter");
    return (
        <>
            <div className="urlnav_parent Counter_display2">
                <Link href="/"><button className={a || b ? "Unactive_link" : "selected_p" }>Home</button></Link>
                <Link href="/go"><button className={a ? "selected_p" : "Unactive_link"}>Color Picker</button></Link>
                <Link href="/counter"><button className={b ? "selected_p" : "Unactive_link"}>Counter</button></Link>     
            </div>
        </>
    );
}