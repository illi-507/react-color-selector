import React from 'react'
import './Color.css'

class Color extends React.Component {

  handleClick(){   
    Clipboard_CopyTo(`${this.props.color.hex}`);
    
  }
      render(){
        return (
    
            <div className="colorSquare" style={{backgroundColor:`${this.props.color.RGB}`}} >
               <div className="word">
                  {this.props.color.colorName} 
                 </div>    
               <div className="button" onClick={this.handleClick.bind(this)}>
               <a href="" id="Copy"> COPY </a>    
             </div>
            </div>
        );
      }
 } 

function alertFunction(){
    alert('11111111111111Click happened');
}
 function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
 
 export default Color;