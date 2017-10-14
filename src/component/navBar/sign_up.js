import React,{Component} from 'react';

class signup extends Component {
	constructor(props) {
	super(props);
		this.state = {
			email:'',
			nation:'',
			First:'',
			Last:'',
			password:'',
			cpass:'',
			tc:0
		}
	}
	handleChange_email() {

	}
	handleChange_first() {

	}
	handleChange_lastName() {

	}
	handleChange_dob() {

	}
	handleChange_pass() {

	}
	handleChange_cpass(){

	}
	handleChange_nation(){

	}
	render() {
		return (
			<div>
				

							
<<<<<<< HEAD
				<a className="signup-text" data-toggle="modal" data-target="#myModal"><i className="fa fa-user" aria-hidden="true"></i>Log In/Sign Up</a>
=======
				<a className="signup-text" data-toggle="modal" data-target="#myModal"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>Log In/Sign Up</a>
>>>>>>> 40e2c12de81fc66ffd92830be4aa7a313d1dee7d
				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	    			<div className="modal-dialog">
	        			<div className="modal-content">
				            <div className="modal-body">
				                <div role="tabpane1">
				                	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>    
				                    <ul className="nav nav-tabs" role="tablist">
<<<<<<< HEAD
				                        <li role="presentation" className="active"><a href="" aria-controls="login" role="tab" data-toggle="tab">log In</a></li>
				                        <li role="presentation"><a href="#" aria-controls="signup" role="tab" data-toggle="tab">Sign Up</a></li>
				                    </ul>
				                    
				                    <div className="tab-content">
				                        <div role="tabpanel" className="tab-pane active" id="log-in"></div>
				                        <div role="tabpane2" className="tab-pane" id="sign-up">
				                               <form>
										       		<li>Email<input value={this.state.login_e} className="login-user" onChange={this.handleChange_email} />
										       		</li>
										       		<li>First Name<input value={this.state.login_e} className="login-user" onChange={this.handleChange_first} />
										       		</li>
										       		<li>Last Name<input value={this.state.login_e} className="login-user" onChange={this.handleChange_lastName} />
										       		</li>
										       		<li>Nationality<input value={this.state.login_e} className="login-user" onChange={this.handleChange_nation} />
										       		</li>
										       		<li>Password<input value={this.state.login_e} type='password' className="login-user" onChange={this.handleChange_pass} />
										       		</li>
										       		<li>Confirm Password<input value={this.state.login_e} className="login-user" onChange={this.handleChange_cpass} />
										       		</li>
										       	</form>
=======
				                        <li role="presentation" className="active"><a href="#log-in" aria-controls="login" role="tab" data-toggle="tab">log In</a></li>
				                        <li role="presentation"><a href="#sign-up" aria-controls="signup" role="tab" data-toggle="tab">Sign Up</a></li>
				                    </ul>
				                    
				                    <div className="tab-content">
				                        <div role="tabpanel" className="tab-pane active" id="log-in">
					                        <form>
					                        	<li>Email<input value={this.state.login_e} className="login-user" onChange={this.handleChange_email} /></li>
					                        	<li>Password<input value={this.state.login_e} type='password' className="login-user" onChange={this.handleChange_pass} /></li>
					                        </form>
					                         <div className="modal-footer">
									            <button type="button" className="btn btn-primary">Login</button>
									          </div>
								        </div>
				                        <div role="tabpane1" className="tab-pane" id="sign-up">
			                               <form>
									       		<li>Email<input value={this.state.login_e} className="login-user" onChange={this.handleChange_email} />
									       		</li>
									       		<li>First Name<input value={this.state.login_e} className="login-user" onChange={this.handleChange_first} />
									       		</li>
									       		<li>Last Name<input value={this.state.login_e} className="login-user" onChange={this.handleChange_lastName} />
									       		</li>
									       		<li>Nationality<input value={this.state.login_e} className="login-user" onChange={this.handleChange_nation} />
									       		</li>
									       		<li>Password<input value={this.state.login_e} type='password' className="login-user" onChange={this.handleChange_pass} />
									       		</li>
									       		<li>Confirm Password<input value={this.state.login_e} className="login-user" onChange={this.handleChange_cpass} />
									       		</li>
									       	</form>
									       	  <div className="modal-footer">
								                <button type="button" className="btn btn-primary">Signup</button>
								            </div>
>>>>>>> 40e2c12de81fc66ffd92830be4aa7a313d1dee7d
				                        </div>
				                    </div>
				                </div>
				            </div>
<<<<<<< HEAD
				            <div className="modal-footer">
				                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				                <button type="button" className="btn btn-primary">Signup</button>
				            </div>
=======
>>>>>>> 40e2c12de81fc66ffd92830be4aa7a313d1dee7d
				        </div>
				    </div>
				</div>
			</div>
		);
	}

}
export default signup;