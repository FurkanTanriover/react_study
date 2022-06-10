import React from "react";
import PropTypes from 'prop-types'; 

//functional component oluşturma
 function Navbar(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <hr/>
    </div>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Default"
}

export default Navbar; 
