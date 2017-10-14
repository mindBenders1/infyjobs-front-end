import React,{Component} from 'react';
// import Login from './login';
// import Signup from './sign_up';
import User from './user';

class nav_bar extends Component{
	
  constructor(props){
    super(props);
    console.log(this.props.data);
  }

	render(){
		return (
      <div>

        <nav className="navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="\">infyJobs</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i>Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Page 1-1</a></li>
                    <li><a href="#">Page 1-2</a></li>
                    <li><a href="#">Page 1-3</a></li>
                  </ul>
                </li>
              </ul>
              
              <form className="navbar-form navbar-left" role="search">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" name="q" />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                  </div>
                </div>
              </form>

              <ul className="nav navbar-nav navbar-right">
                <User/> 
              </ul>

            </div>
          </div>
        </nav>

      </div>
		);
	}

};
export default nav_bar;