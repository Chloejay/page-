import React from 'react';
import './App.css'; 
import Footer from './Footer/Footer.js';  
import WorkImage from './Work/work.js'; 
import Skill from './Skill/skill.js'; 
import Header from './Header/Header.js'; 

export default class MainPage extends React.Component {
    constructor(props){
        super(props); 
        this.state= {coffee:" ", 
                    contact: " ",
                  }; 
        this.handleClick= this.handleClick.bind(this); 
        
    }

    handleClick(e){
        this.setState({
            coffee: this.state.coffee+ new Date()

        })
        return e.preventDefault(); 
    }


render()
{return (
        <div>
            <Header name ="Chloe Ji" /> 
             <h6>Let us meet for {this.state.coffee} ☕️ </h6> 
             <button onClick= {this.handleClick} style={{backgroundColor: "black", color: "white", position:"absolute", right: "9.5%", top:"9.5%" }}> Contact Me </button> 
             <p style={{position:"absolute", right: "8%", top:"6%", lineHeight:"1.2em"}}>Feel free to <a href={"mailto:chloejiy@gmail.com"} style={{color:"red"}}>throw me an email,</a><br />for a coffee and talk!</p> 
            <WorkImage /> 
            <Skill /> 
            <Footer /> 
        </div> 
        )}
} 


