import React, { useState } from "react";
import "./header.css";

 function Header(){
    const [showModal , setshowModel] = useState(false);
    return (
     <header className="flex">
        <button className="menu icon-menu" onClick={()=>{
            setshowModel(true)
        }}></button>
        <div />
        
        <nav>
        <ul className="flex">
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">CV</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        </nav>
        <button className="icon-moon-o"></button>

{showModal && (
                <div className="fixed">
                    <ul className="modal">
                    <li>
                        <button className="icon-close" onClick={()=>setshowModel(false)}>
                      
                        </button>
                        </li>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">CV</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
)}
        
     </header>
    );
}
export default Header;