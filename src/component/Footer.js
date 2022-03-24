import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    
    return (
        <>
<footer >
   <div style={{height:"250px", width:"100%", backgroundColor: "black", textAlign:"center"}}>
      <div style={{color:"white" , padding: "5%"}}>
         &copy; <b>2021 | Created & designed by</b> <Link to="#" style={{color: "#48dbfb"}}>WebGohil</Link>
      </div>
      <div  className="sm">
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-facebook-f"></Link>
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-twitter"></Link>
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-instagram"></Link>
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-linkedin-in"></Link>
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-github"></Link><br/>
      </div>
   </div>
   
</footer>

        </>
    )
}

export default Footer
