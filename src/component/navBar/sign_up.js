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
				                        </div>
		);
	}

}
export default signup;