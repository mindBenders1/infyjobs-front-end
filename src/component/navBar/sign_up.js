import React,{Component} from 'react';
import axios from 'axios';

class signup extends Component {
	constructor(props) {
	super(props);
		this.state = {
			email:'',
			nation:'',
			First:'',
			Last:'',
			pass:'',
			cpass:'',
			dob:'',
			tc:0
		}
		this.handleChange_email=this.handleChange_email.bind(this);
		this.handleChange_first=this.handleChange_first.bind(this);
		this.handleChange_lastName=this.handleChange_lastName.bind(this);
		this.handleChange_dob=this.handleChange_dob.bind(this);
		this.handleChange_pass=this.handleChange_pass.bind(this);
		this.handleChange_cpass=this.handleChange_cpass.bind(this);
		this.handleChange_nation=this.handleChange_nation.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange_email(event) {
		this.setState({email:event.target.value});
	}
	handleChange_first(event) {
		this.setState({first:event.target.value});
	}
	handleChange_lastName(event) {
		this.setState({last:event.target.value});
	}
	handleChange_dob(event) {
		this.setState({dob:event.target.value});
	}
	handleChange_pass(event) {
		this.setState({pass:event.target.value});
	}
	handleChange_cpass(event){
		this.setState({cpass:event.target.value});
	}
	handleChange_nation(event){
		this.setState({nation:event.target.value});
	}
	handleSubmit(event){
		event.preventDefault();
		
		$.ajax({
			type: "POST",
			url: 'http://f104b17f.ngrok.io/accounts/register',
			data:{	
				email:this.state.email,
				first_name:this.state.first,
				last_name:this.state.lastName,
				password:this.state.pass
			},
			success: (data)=>{
				console.log(data);
			}
		})
		.then((res)=>{
			console.log(res.data);
		})
		.catch((e)=>{
			console.log(e);
		})
	
	}

	render() {
		return (
			<div role="tabpane1" className="tab-pane" id="sign-up">
			               	        <form onSubmit={this.handleSubmit}>
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
						   		<li>Submit<input type="submit" value="Submit"></input></li>
		       	</form>
			      	<div className="modal-footer">
			                					<button type="button" className="btn btn-primary">Signup</button>
			       			</div>
				               	 </div>
		);
	}

}
export default signup;