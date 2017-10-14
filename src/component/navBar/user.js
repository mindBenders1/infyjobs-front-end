import React,{Component} from 'react';
import Login from './login';
import Signup from './sign_up';
class user extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<a className="signup-text" data-toggle="modal" data-target="#myModal"><i className="fa fa-user" aria-hidden="true"></i>Log In/Sign Up</a>
				<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    			<div className="modal-dialog">
	        			<div className="modal-content">
				            <div className="modal-body">
				                <div role="tabpane1">
				                	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>    
				                    <ul className="nav nav-tabs" role="tablist">
				                        <li role="presentation" className="active"><a href="#log-in" aria-controls="login" role="tab" data-toggle="tab">log In</a></li>
				                        <li role="presentation"><a href="#sign-up" aria-controls="signup" role="tab" data-toggle="tab">Sign Up</a></li>
				                    </ul>
				                    
				                    <div className="tab-content">
				                        <Login/>
			                        	<Signup/>
				                    </div>
				                </div>
				            </div>
				            
				        </div>
				    </div>
				</div>
			</div>
		);
	}
}
export default user;