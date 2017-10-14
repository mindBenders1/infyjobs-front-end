import React,{Component} from 'react';
import axios from 'axios';

class login extends Component{
	constructor(props){
		super(props);
		this.state = {login_e: '', login_p: '', login:0 ,userName:''};
		this.handleChange_email = this.handleChange_email.bind(this);
		this.handleChange_pass = this.handleChange_pass.bind(this);
   		this.handleSubmit = this.handleSubmit.bind(this);
   	}

	handleChange_email(event){
		this.setState({login_e: event.target.value});
	}	
	handleChange_pass(event){
		this.setState({login_p: event.target.value});
	}
	
	handleSubmit(event){
		event.preventDefault();
		axios.post('http://localhost:3001/user/login',{
			email: this.state.login_e,
			password: this.state.login_p
		})
		.then((res) => {
			this.setState({login: 1});
			this.setState({userName: res.data.firstName});
		})
		.catch((e)=>{
			alert('error'+ e);
		});
	}

	render(){
			return (
						<div className="tab-content">
				            <div role="tabpanel" className="tab-pane active" id="log-in">
				                        	
				            	<form onSubmit={this.handleSubmit}>
				            		<li>Email<input value={this.state.login_e} className="login-user" onChange={this.handleChange_email} /></li>
				            		<li>Password<input value={this.state.login_e} type='password' className="login-user" onChange={this.handleChange_pass} /></li>
				            		<li>Submit <input type='submit' value="Submit"></input></li>
				            	</form>
					                        
					        	<div className="modal-footer">
				            		<button type="button" className="btn btn-primary">Login</button>
				           		</div>
			           		</div>
			           	</div>
					
			);
	}
}

export default login;
