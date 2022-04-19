import React from 'react'

const Header = (props) => {
  return (
    <>
 
            <div className="col-md-12">
                <div className="site-heading text-center">
                    <h2>{props.heading}</h2>
                    <h4>{props.theory}</h4>
                </div>
            </div>
     
    </>
  )
}

export default Header