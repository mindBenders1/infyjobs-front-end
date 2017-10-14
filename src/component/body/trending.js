import React,{Component} from 'react';
import axios from 'axios';

class trend extends Component{
	constructor(props){
		super(props);
	}
	data(){
		axios.get("#")
		.then((res)=>{

		})
	}
	render(){
		return(
			<div className="jumbotron">
				<div className="container">
					{this.data}
				</div>
			</div>
		);
	}
}
export default trend;