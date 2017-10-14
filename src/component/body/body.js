import React,{Component} from 'react';
import Trend from './trending';
class body extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<Trend/>
			</div>
		);
	};
}
export default body;