import React, { Component } from 'react';



class Book extends Component {
  state = {
    books: this.props,
    
   
    
  };
  
  
  
  getWeeksOnList = () => {
    return this.state.books.weeksOnList === 1
      ? 'NEW THIS WEEK'
      : this.state.books.weeksOnList + ' WEEKS ON THE LIST';
      
  };

  render() {
   
    return (
      
     
      <table className="booktable">
         <tr>
           
           <td>
         
               
           </td>
          <td>
          
      
        <h4>{this.state.books.rank} . {this.state.books.bookTitle.toUpperCase()}<br></br>
        <i>  Authors : {this.state.books.author} | {this.state.books.publisher}   </i>
        </h4>
        <div><h5> More Info:</h5>
           
        <blockquote>
       
        <b>Description :</b>  {this.state.books.description} 
        <br></br>
        <b>Weeks On list:</b>  {this.getWeeksOnList()} 
        <br></br>
        <b>Current Rank :</b> {this.state.books.rank}
        <br></br>
        <b>Rank Last Week:</b>  {this.state.books.rank_last_week} 
        <br></br>
        <b>ISBN NO:</b>  {this.state.books.primary_isbn13} 
        </blockquote>
          

        

         </div>
       
      

      
      
  
         
        
              

        
        <form className="formbtn">
  <button  className="Abutton" formaction={this.state.books.amazon_product_url} formtarget="_blank"><i class="fa fa-amazon" aria-hidden="true"> </i>  check out</button>
  
</form>

     <br/>  
      
<hr/>
          </td>
          
      
         </tr>

      </table>
      
    );
  }
}

export default Book;
