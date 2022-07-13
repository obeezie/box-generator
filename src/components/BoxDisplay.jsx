import React, {useState} from 'react'




const BoxDisplay = (props) => {
    return (
    <fieldset>
        <legend>BoxDisplay.jsx</legend>
        <h1>Boxes</h1>
        {
            
            props.boxArray.map((color, i) =>{
                return(
                    <div key={i} style={{backgroundColor: color, height:'100px',width:'100px', display:'inline-block', margin: '10px'}}></div>
                )
            })
        }
    </fieldset>




    // <h1>BoxDIsplay {props.boxColors}</h1>
    // <div>
    //     {
    //         props.boxColors.map((color, i) => {
    //             <pre key = {i}>{color}</pre>
    //         })
    //     }
    // </div>
    // props.boxColors.map((color, i) =>{
    // return(
    //     <pre key = {i}>{color}</pre>
    // )
    // })
    

  )
}

export default BoxDisplay