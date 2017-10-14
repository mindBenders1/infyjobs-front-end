import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Navbar from './component/navBar/navbar';
import Body from './component/body/body';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			login: 0
		};

	}
	
	render(){
		return (<div>
					<Navbar data={this.state.login}/>
					<Body/>
				</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
