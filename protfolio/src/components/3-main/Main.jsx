import React from 'react';
import './main.css';
import { useState } from 'react';
import { myproject } from './myproject';



export default function Main() {
  const [active, setactive] = useState("all");
  const [array, setarray] = useState(myproject)

  const handelClick = (buttonCategory) => {
    setactive(buttonCategory);
    const newArray = myproject.filter((item) => {
      const newArray2 = item.category.filter((myitems) => {
        return myitems === buttonCategory;
      })
      return newArray2[0] === buttonCategory;
    })
    setarray(newArray);
  }

  return (
    <main className='flex'>
      <section className="flex  left-section">
        <button
          onClick={() => {
            setactive("all");
            setarray(myproject)
          }}
          className={active === "all" ? "active" : null}>All project</button>
        <button
          onClick={() => {
            handelClick("css")
          }}
          className={active === "css" ? "active" : null}>HTML & CSS</button>


        <button
          onClick={() => {
            handelClick("js")
          }}
          className={active === "js" ? "active" : null}>javascript</button>




        <button
          onClick={() => {
            handelClick("react")
          }}
          className={active === "react" ? "active" : null}>React & MUI</button>




        <button
          onClick={() => {
            handelClick("PHP")
          }}
          className={active === "PHP" ? "active" : null}>PHP</button>



      </section>
      <section className="flex right-section">

        {array.map((item) => {
          return (
            <article key={item.imgpath} className='card'>
              <img style={{width:"266px"}} src={item.imgpath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className='title'> {item.title}</h1>
                <p className='sub-title'>    {item.subtitle}        </p>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className='flex'>
                    <div className="icon-link"></div>
                    <div className="icon-github-square"></div>
                  </div>
                  <a href="" className='link flex'>
                    more <span style={{ alignSelf: "end" }} className="icon-arrow_forward "></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}

      </section>
    </main>
  )
}
