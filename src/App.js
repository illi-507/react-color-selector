import React from 'react';
import logo from './logo.svg';
import './App.css';
import Color from './components/Color'
class App extends React.Component {
  
  constructor(props){
     super(props);
  
      this.state ={
         colorSet:[
           { //0
          colorName:"LIGHT GREENISH BLUE",
           hex:"#55efc4",
           slogan: "PASTE ME!",
           RGB:"rgb(85, 239, 196)"
         },
         { //1
          colorName:"FADED POSTER",
           hex:"#81ecec",
           slogan: "IT ROCKS!",
           RGB:"rgb(129, 236, 236)"
         
         },{//2
          colorName:"GREEN DARNER TAIL",
           hex:"#74b9ff", 
           slogan: "PASTE ME!",
           RGB:"rgb(116, 185, 255)" 
         },{ //3
          colorName:"SHY MOMENT",
           hex:"#a29bfe",
           slogan: "GOT IT!",
           RGB:"rgb(162, 155, 254)"
         },{ //4
          colorName:"CITY LIGHTS",
           hex:"#dfe6e9",
           slogan: "PASTE ME!",
           RGB:"rgb(223, 230, 233)" 
         },{ //5
          colorName:"MINT LEAF",
           hex:"#00b894",
           slogan: "IT'LL ROCK!",
           RGB:"rgb(0, 184, 148)"
         },{//6
          colorName:"ROBIN'S EGG BLUE",
           hex:"#00cec9",
           slogan: "OH YEAH!",
           RGB:"rgb(0, 206, 201)"
         },{//7
          colorName:"ELECTRON BLUE",
           hex:"#0984e3",
           slogan: "GOT IT!",
           RGB:"rgb(9, 132, 227)"
         },{//8
          colorName:"EXODUS FRUIT",
           hex:"#6c5ce7",
           slogan: "PASTE ME!",
           RGB:"rgb(108, 92, 231)"
         },{//9
          colorName:"SOOTHING BREEZE",
           hex:"#b2bec3",
           slogan: "REIGHT ONE!",
           RGB:"rgb(178, 190, 195)"
         },{//10
          colorName:"SOUR LEMON",
           hex:"#ffeaa7",
           slogan: "PASTE ME!",
           RGB:"rgb(255, 234, 167)"
         },{//11
          colorName:"FIRST DATE",
           hex:"#fab1a0",
           slogan: "GOT IT!",
           RGB:"rgb(250, 177, 160)"
         },{//12
          colorName:"PINK GLAMOUR",
           hex:"#ff7675",
           slogan: "RIGHT ONE!",
           RGB:"rgb(255, 118, 117)"
         },{//13
          colorName:"PICO-8 PINK",
           hex:"#fd79a8",
           slogan: "WILL DO!",
           RGB:"rgb(253, 121, 168)"
         },{//14
          colorName:"AMERICAN RIVER",
           hex:"#636e72",
           slogan: "PASTE ME!",
           RGB:"rgb(99, 110, 114)"
         },{//15
          colorName:"BRIGHT YARROW",
           hex:"#fdcb6e",
           slogan: "GOT IT!",
           RGB:"rgb(253, 203, 110)"
         },{//16
          colorName:"ORANGEVILLE",
           hex:"#e17055",
           slogan: "PASTE ME!",
           RGB:"rgb(225, 112, 85)"
         },{//17
          colorName:"CHI-GONG",
           hex:"#d63031",
           slogan: "PASTE ME!",
           RGB:"rgb(214, 48, 49)"
         },{//18
          colorName:"PRUNUS AVIUM",
           hex:"#e84393",
           slogan: "COPIED!",
           RGB:"rgb(232, 67, 147)"
         },{//19
          colorName:"DRACULA ORCHID",
           hex:"#2d3436",
           slogan: "COPIED!",
           RGB:"rgb(45, 52, 54)"
         }
        
        ]
           

      }  
  }
 
  
  render(){
    return (
    <div className="App">

      <div className = "select">      
      </div>

      <div className="flex-container">
      <Color color= {this.state.colorSet[0]}/>
      <Color color= {this.state.colorSet[1]}/>
      <Color color= {this.state.colorSet[2]}/>
      <Color color= {this.state.colorSet[3]}/>
      <Color color= {this.state.colorSet[4]}/> 
      
      </div>
      <div className="flex-container">
      <Color color= {this.state.colorSet[5]}/>
      <Color color= {this.state.colorSet[6]}/>
      <Color color= {this.state.colorSet[7]}/>
      <Color color= {this.state.colorSet[8]}/>
      <Color color= {this.state.colorSet[9]}/>   
      
      </div>
      <div className="flex-container">
      <Color color= {this.state.colorSet[10]}/>
      <Color color= {this.state.colorSet[11]}/>
      <Color color= {this.state.colorSet[12]}/>
      <Color color= {this.state.colorSet[13]}/>
      <Color color= {this.state.colorSet[14]}/> 
      
      </div>
      <div className="flex-container">
      <Color color= {this.state.colorSet[15]}/>
      <Color color= {this.state.colorSet[16]}/>
      <Color color= {this.state.colorSet[17]}/>
      <Color color= {this.state.colorSet[18]}/>
      <Color color= {this.state.colorSet[19]}/>   
      
      </div>

    </div>
   );
  }
}

export default App;
