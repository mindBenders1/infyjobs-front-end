import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Navbar from './component/navBar/navbar';

class App extends Component{
	
	render(){
		return (<div>
					<Navbar/>
				</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
