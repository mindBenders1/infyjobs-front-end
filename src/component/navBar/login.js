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
		console.log(this.state.login);
		if(!this.state.login){
				return (
					<div>
						<div className="dropdown">
						    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  							<span className="caret"></span></button>
    						<ul className="dropdown-menu">
      							<li><span className="glyphicon glyphicon-user"></span> Email <input value={this.state.login_e} className="login-user" onChange={this.handleChange_email} />
							</li>
      							<li><span className="glyphicon glyphicon-log-in"></span> Password <input type="password" value={this.state.login_p} className="login-pass" onChange={this.handleChange_pass} />
							</li>
							<li><input type="submit" value="Submit" />
							</li>
      						</ul>
  						</div>
						<form onSubmit={this.handleSubmit}>
							
						< /form>
					</div>
				);
		}
		else{

			return (
				<div>hello {this.state.userName}</div>
			);
		}
	}
}

export default login;
