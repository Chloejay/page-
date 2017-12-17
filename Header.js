import React from 'react'; 
/*import Avatar from './avatar.js'; 
import avatar from './public/avatar.png'; */ 

class Header extends React.Component{
	render(){
		return (
    <div style={{paddingTop: '20px'}}>
    <h1>Hey! I am {this.props.name}. </h1>
    <h6>CraftWalker 🏂 & Passionate Learner </h6> 
    </div> 
		)
	}
}; 

export default Header; 
