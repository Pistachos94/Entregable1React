import React, { useState } from 'react';
import phrases from '../phrases.json'
const QuoteBox = () => {
    const randomIndex= Math.floor(Math.random()*phrases.length)
    const [index, setIndex] =useState(randomIndex)

    const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871', '#D63423', '#C25E5E', '#31656E','#16A8C1' ]

    const randomBg=Math.floor(Math.random()*colors.length);
    const [bgColorIndex, setBgColorIndex] =useState(randomBg)

    document.body.style=`background:${colors[bgColorIndex]}`
    
    const changeQuote =()=>{
        const randomIndex2= Math.floor(Math.random()*phrases.length)
        setIndex(randomIndex2);

        const randomBg2=Math.floor(Math.random()*colors.length);
        setBgColorIndex(randomBg2);
    }


    return (
        <div className="generalBox disflex" style={{color: `${colors[bgColorIndex]}`}}>
            <div className='quote'>
                <i className="fa-solid fa-quote-left"></i>
            </div>
            <div>
                <div className='quoteBox'>
                    <p>{phrases[index].quote}</p>
                </div>
                <div className='author'>
                    <em>{phrases[index].author}</em>
                </div>
                <div className='buttonCont disflex'>
                    <button onClick={changeQuote} style={{background: `${colors[bgColorIndex]}`}}>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;