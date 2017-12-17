import React from "react"; 

const Footer = function (){
	return (
		<div style= {{position:"absolute", bottom: 0, left: "40%"}}>
			<p><small><a href="">Made</a> by reactjs,love © 2017, somewhere on Earth</small></p>
		    <ul className="footer" style={{display: "flex"}}>
			    <li style={{display:"flex"}}>
			    	<img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL+'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-48.png'} /> 
			    </li>
			    <li>
			    	<img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL+'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_square-48.png'} /> 
			    </li> 
			    <li>
			    	<img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL+'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_color-48.png'} />
			    </li> 
			    <li>
			    	<img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL+'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_square_color-48.png'} />
			    </li> 
			    <li>
			    	<img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL+'https://cdn4.iconfinder.com/data/icons/picons-social/57/53-medium-3-48.png'} /> 
			    </li> 
			    <li>
			     <img style={{width: '30px', height: '30px'}} src={process.env.PUBLIC_URL+'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-48.png'} />
			    </li> 
			 </ul>  
		</div> 
	   )
}

export default Footer;  