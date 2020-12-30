import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getBooks}>
     
      <center>
        <br></br>
      
      <button name="formSearch" className="fbutton">Search Best Sellers</button>
      </center>
      
     
   
    </form>
  );
};

export default Form;