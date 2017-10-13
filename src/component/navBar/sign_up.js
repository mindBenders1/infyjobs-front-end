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
			<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Sign Up</button>

			<div id="myModal" className="modal fade" role="dialog">
 				<div className="modal-dialog">
				<div className="modal-content">
      			<div className="modal-header">
       			<button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Sign Up</h4>
      </div>
      <div className="modal-body">
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
      </div>
      <div className="modal-footer">
        		<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
     			 </div>
    			</div>
 			 </div>
			</div>
			</div>
		);
	}

}
export default signup;