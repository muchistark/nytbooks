import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div >
          <div className="navbar">
           <table>
           <tr>
            <td>
            <img width="40"  src="BOOK.svg"  alt="logo"/>
            </td>    
            <td>
            <h4>NewYork Times | Best Sellers</h4> 
            </td> 
               
          </tr>     
               
          </table>   
          
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;