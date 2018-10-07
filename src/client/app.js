import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nav } from './actions';
import Builder from './builder';
import Content from './content';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	constructor(props) {
		super(props);


		this.nav = this.nav.bind(this);

	}
	componentDidMount() {

	}
	componentWillUnMount() {


	}
	nav(p, e) {
		this.props.nav(p);
	}
	render() {
		// alert(this.props.users.isLoggedIn);
		return (
			<div>
				<div>
					<Header nav={this.nav} activeOne={this.props.users.curPage} />
				</div>
				<div>
					<div className="jumbotron" style={{ marginBottom: '0px' }}>
						{
							this.props.users.curPage == "About" ? <About /> : this.props.users.curPage == "Build" ? <Builder /> : <Content window="Preview" />
						}
					</div>
				</div>
				<div>
					<footer className="container-fluid text-center bg-dark blockquote-footer" style={{'bottom':'0','position':'fixed'}}>
						<div className="container">
							<div className="copyright">
								© Copyright <strong>ReactAppBuilder</strong>. All Rights Reserved
  						</div>
							<div className="credits">
								Designed by <a href="#">RajaSekhar K</a>
							</div>
						</div>

					</footer>
				</div>
			</div>
		)
	}
};

class Header extends React.Component {
	constructor() {
		super();
		this.activeClass = this.activeClass.bind(this);
	}
	activeClass(p) {
		// console.info(p);
		// console.info(this.props.activeOne);
		const baseActive = "nav-item";
		let finalActive = baseActive;
		if (p == this.props.activeOne) {
			finalActive += " active";
		}
		return (
			finalActive
		)
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="#">React App Builder</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarColor01">
						<ul className="navbar-nav mr-auto">
							<li className={this.activeClass("Build")} onClick={(e) => this.props.nav("Build", e)}>
								<a className="nav-link" href="#">Build <span className="sr-only">(current)</span></a>
							</li>
							<li className={this.activeClass("Preview")} onClick={(e) => this.props.nav("Preview", e)}>
								<a className="nav-link" href="#">Preview</a>
							</li>
							<li className={this.activeClass("About")} onClick={(e) => this.props.nav("About", e)}>
								<a className="nav-link" href="#">About</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

class About extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="container">
				<p>
					# React App Builder<br />
					Client Application using react redux, webpack 4 and Bootstrap 4<br />
					Helps to build a simple webapp with multiple tabs from the browser dynamically(only preview with the current version)<br />
					This application gives following features:<br />
					1. Edit the background image sources, App names, Navigation panel names, Headings of the pages.<br />
					2. Able to edit the existing data in the components like text, images sources and other form data.<br />
					3. Able to choose color for the background, text.<br />
					4. Built application works on react with redux.<br />
					5. Static app with no server calls.<br />
					<br />
					#Starting the application <br />
					Open index.html present inside of dist folder <br />
					<br />

					# Future Scope<br />
					1. Exporting the application built.<br />
					2. Feature to add the components in between.<br />
					3. Providing custom design for the components.<br />

					Built by RajaSekhar K. <br />
					Submit your issue at github.<br />
				</p>
			</div>
		)
	}
}

var mapStateToProps = (state) => {
	return {
		users: state.users
	};
}

var mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ nav: nav }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps)(Home);