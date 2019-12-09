import React from "react";

const NavBar= (props) => {
  
     return(
     <div className="navbar bg-primary" >
         <h1> <i className ="fab fa-github"></i> {props.title} </h1>     
        </div>)
 
}
NavBar.defaultProps = {
    title :" GitHub Finder "
}
export default NavBar