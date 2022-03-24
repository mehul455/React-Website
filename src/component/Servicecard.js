import React from 'react'
import { useSelector } from "react-redux";
const Servicecard = (props) => {
    const themeReducer = useSelector((themeReducer) => themeReducer.Darkreducer);
    let { theme } = themeReducer;
    
   
    return (
        <>
              <div className='col-md-4 col-sm-6 equal-height zindex' style={theme ? {color:"black" }  : {color:'black' }}>
                    <div className="item">
                        <i className={props.icon}></i>
                        <h4>{props.heading}</h4>
                        <p>
                            {props.paraghraph}
                        </p>
                    </div>
                </div>
        </>
    )
}

export default Servicecard
