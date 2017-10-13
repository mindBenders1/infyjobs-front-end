import React,{Component} from 'react';
import Login from './login';
import Signup from './sign_up';

class nav_bar extends Component{
	
  constructor(props){
    super(props);
    console.log(this.props.data);
  }

	render(){
		return (
      <div>
        <nav className="navbar">
  				  <div className="container-fluid">
    				<div className="navbar-header">
            <span className="glyphicon glyphicon-briefcase"></span>
              <a className="navbar-brand" href="\">infyJobs</a>
    				</div>
    				<ul className="nav navbar-nav">
      					<li className="active"><a href="#">Home</a></li>
      					<li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
      	  			<ul className="dropdown-menu">
        		  		<li><a href="#">Page 1-1</a></li>
        		  		<li><a href="#">Page 1-2</a></li>
          				<li><a href="#">Page 1-3</a></li>
        			</ul>
      					</li>
   				 	  <li><a href="#">Page 2</a></li>
 				  	 </ul>
	    			<ul className="nav navbar-nav navbar-right">
					   <Signup/> 
          	 <Login/>
					</ul>
  					</div>
				</nav>
    </div>
		);
	}

};
export default nav_bar;