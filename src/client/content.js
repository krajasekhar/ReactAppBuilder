import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cnav, componentClick } from './actions';
// import styles from 'bootswatch/dist/cerulean/bootstrap.min.css';

class Content extends React.Component {
	constructor(props) {
		super(props);

		this.nav = this.nav.bind(this);
		this.activeClass = this.activeClass.bind(this);
		this.componentClick = this.componentClick.bind(this);
		this.cssElement = this.cssElement.bind(this);
		this.headerBlock = this.headerBlock.bind(this);

	}
	componentDidMount() {

	}
	componentWillUnMount() {


	}
	nav(p, e) {
		this.props.nav(p);
	}
	componentClick(content, p) {
		// console.info(p);
		this.props.componentClick(content, p);
	}
	activeClass(p) {
		// console.info(p);
		const baseActive = "nav-item";
		let finalActive = baseActive;
		if (p == this.props.contents.curPage) {
			finalActive += " active";
		}
		return (
			finalActive
		)
	}
	headerBlock() {
		// console.info(this.props.contents.txtColor);
		return (
			<nav className="navbar navbar-expand-lg navbar-dark " style={{ 'backgroundColor': this.props.contents.navColor,'textDecorationColor': this.props.contents.txtColor}}>
				<a className="navbar-brand" href="#" style={{'color': this.props.contents.txtColor}}>{this.props.contents.appName}</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav mr-auto">
						<li className={this.activeClass("Content1")} onClick={(e) => this.nav("Content1", e)} >
							<a className="nav-link" href="#" style={{'color': this.props.contents.txtColor}}>{this.props.contents.allPages["Content1"].name} <span className="sr-only">(current)</span></a>
						</li>
						<li className={this.activeClass("Content2")} onClick={(e) => this.nav("Content2", e)}>
							<a className="nav-link" href="#" style={{'color': this.props.contents.txtColor}}>{this.props.contents.allPages["Content2"].name}</a>
						</li>
						<li className={this.activeClass("Content3")} onClick={(e) => this.nav("Content3", e)}>
							<a className="nav-link" href="#" style={{'color': this.props.contents.txtColor}}>{this.props.contents.allPages["Content3"].name}</a>
						</li>
						<li className={this.activeClass("Content4")} onClick={(e) => this.nav("Content4", e)}>
							<a className="nav-link" href="#" style={{'color': this.props.contents.txtColor}}>{this.props.contents.allPages["Content4"].name}</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
	cssElement() {
		let htmlStyle = '<style>.selectDiv {border:2px solid grey;margin:0;padding:0}}</style><style>.selectDiv:hover {border:2px solid white;cursor: pointer;disabled:true;z-index:10;}} </style><style>.selectDiv *{pointer-events:none}}</style>';
		return htmlStyle;
	}
	render() {
		return (
			<div>

				<div style={{ border: '1px solid grey' }}>
					<div dangerouslySetInnerHTML={{
						__html: this.cssElement()
					}}>
					</div>
					<header className="">
						<div className={this.props.window == "Build" ? "selectDiv" : ""} id="title" onClick={(e) => this.props.window == "Build" && this.componentClick("", -1, e)} style={{ 'border': this.props.window == "Build" && this.props.contents.curBuildComponent[1] == -1 && '2px solid red' }} tabIndex="0">
							{this.headerBlock()}
						</div>

					</header>
					<div style={{'margin':'0','padding':'0'}}>
						{
							this.props.contents.curPage == "Content2" ? <Content2 {...this.props} /> : this.props.contents.curPage == "Content3" ? <Content3 {...this.props} /> : this.props.contents.curPage == "Content4" ? <Content4 {...this.props} /> : <Content1 {...this.props} />
						}
					</div>
					<footer className="container-fluid text-center blockquote-footer" style={{ 'backgroundColor': this.props.contents.navColor, 'color': this.props.contents.txtColor}} >
						<div className="container">
							<div className="copyright">
								© Copyright <strong>ReactAppBuilder</strong>. All Rights Reserved
  						</div>
							<div className="credits">
								Designed by <a href="#">ReactAppBuilder</a>
							</div>
						</div>

					</footer>
				</div>
			</div>
		)
	}
};


class Content1 extends React.Component {
	constructor() {
		super();
		this.componentClick = this.componentClick.bind(this);

	}
	componentClick(content, p) {
		// console.info(p);
		this.props.componentClick(content, p);
	}
	render() {
		// console.info(this.props.contents);
		return (
			<div>

				<div className={this.props.window == "Build" ? "selectDiv" : ""} id="title" onClick={(e) => this.props.window == "Build" && this.componentClick("Content1", 0, e)} style={{ 'border': this.props.window == "Build" && this.props.contents.curBuildComponent[0] == "Content1" && this.props.contents.curBuildComponent[1] == 0 && '2px solid red' }} tabIndex="1">
					<div className="text-center " style={{ position: 'relative' }}>
						<img src={this.props.contents.allPages["Content1"].components[0][2].value} className="img-responsive" style={{ width: '100%', height: '500px' }} />
						<div style={{ position: 'absolute', top: '45%', left: 0, width: '100%' }}>
							<h1 style={{ 'color': this.props.contents.allPages["Content1"].components[0][3].value }}>{this.props.contents.allPages["Content1"].components[0][0].value}</h1>
							<p style={{ 'color': this.props.contents.allPages["Content1"].components[0][4].value }}>{this.props.contents.allPages["Content1"].components[0][1].value}</p>
						</div>
					</div>
				</div>

				<div className={this.props.window == "Build" ? "selectDiv" : ""} id="title" onClick={(e) => this.props.window == "Build" && this.componentClick("Content1", 1, e)} style={{ 'border': this.props.window == "Build" && this.props.contents.curBuildComponent[0] == "Content1" && this.props.contents.curBuildComponent[1] == 1 && '2px solid red' }} tabIndex="2">
					<div className=" text-center" style={this.props.contents.allPages["Content1"].components[1][1].value == "Black" ? { 'backgroundColor': 'black', 'color': 'white','padding':'20px' } : {'padding':'20px'}}>
						<h3>{this.props.contents.allPages["Content1"].components[1][0].value}</h3><br />
						<div className="row">

							<div className="well">
								<p>
									{this.props.contents.allPages["Content1"].components[1][2].value}
								</p>
							</div>
							<div className="well">
								<p>
									{this.props.contents.allPages["Content1"].components[1][3].value}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={this.props.window == "Build" ? "selectDiv" : ""} id="title" onClick={(e) => this.props.window == "Build" && this.componentClick("Content1", 2, e)} style={{ 'border': this.props.window == "Build" && this.props.contents.curBuildComponent[0] == "Content1" && this.props.contents.curBuildComponent[1] == 2 && '2px solid red' }}>
					<div className=" text-center" style={this.props.contents.allPages["Content1"].components[2][1].value == "Black" ? { 'backgroundColor': 'black', 'color': 'white','padding':'20px' } : {'padding':'20px'}}>
						<h3>{this.props.contents.allPages["Content1"].components[2][0].value}</h3><br />
						<div className="row">
							<div className="col-sm-4">
								<img src={this.props.contents.allPages["Content1"].components[2][2].value} className="img-responsive" style={{ width: '100%' }} alt="Image" />
								<p>{this.props.contents.allPages["Content1"].components[2][3].value}</p>
							</div>
							<div className="col-sm-4">
								<img src={this.props.contents.allPages["Content1"].components[2][4].value} className="img-responsive" style={{ width: '100%' }} alt="Image" />
								<p>{this.props.contents.allPages["Content1"].components[2][5].value}</p>
							</div>
							<div className="col-sm-4">
								<img src={this.props.contents.allPages["Content1"].components[2][6].value} className="img-responsive" style={{ width: '100%' }} alt="Image" />
								<p>{this.props.contents.allPages["Content1"].components[2][7].value}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-4">
								<img src={this.props.contents.allPages["Content1"].components[2][8].value} className="img-responsive" style={{ width: '100%' }} alt="Image" />
								<p>{this.props.contents.allPages["Content1"].components[2][9].value}</p>
							</div>
							<div className="col-sm-4">
								<img src={this.props.contents.allPages["Content1"].components[2][10].value} className="img-responsive" style={{ width: '100%' }} alt="Image" />
								<p>{this.props.contents.allPages["Content1"].components[2][11].value}</p>
							</div>
							<div className="col-sm-4">
								<img src={this.props.contents.allPages["Content1"].components[2][12].value} className="img-responsive" style={{ width: '100%' }} alt="Image" />
								<p>{this.props.contents.allPages["Content1"].components[2][13].value}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class Content2 extends React.Component {
	constructor() {
		super();
	}
	componentClick(content, p) {
		// console.info(p);
		this.props.componentClick(content, p);
	}
	render() {
		return (
			<div className={this.props.window == "Build" ? "selectDiv" : ""} id="title" onClick={(e) => this.props.window == "Build" && this.componentClick("Content2", 0, e)} style={{ 'border': this.props.window == "Build" && this.props.contents.curBuildComponent[0] == "Content2" && this.props.contents.curBuildComponent[1] == 0 && '2px solid red' }}>
				<div style={this.props.contents.allPages["Content2"].components[0][0].value == "Black" ? { 'backgroundColor': 'black' } : {}}>
					<div className="text-center" >
						<h3>{this.props.contents.allPages["Content2"].name}</h3>
					</div>
					<div className="card-deck text-center" style={{ 'margin': '12px' }}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{this.props.contents.allPages["Content2"].components[0][1].value}</h5>
								<p className="card-text">{this.props.contents.allPages["Content2"].components[0][2].value}</p>
								<p className="card-text"></p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{this.props.contents.allPages["Content2"].components[0][3].value}</h5>
								<p className="card-text">{this.props.contents.allPages["Content2"].components[0][4].value}</p>
								<p className="card-text"></p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{this.props.contents.allPages["Content2"].components[0][5].value}</h5>
								<p className="card-text">{this.props.contents.allPages["Content2"].components[0][6].value}</p>
								<p className="card-text"></p>
							</div>
						</div>
					</div>
					<div className="card-deck text-center" style={{ 'margin': '12px' }}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{this.props.contents.allPages["Content2"].components[0][7].value}</h5>
								<p className="card-text">{this.props.contents.allPages["Content2"].components[0][8].value}</p>
								<p className="card-text"></p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{this.props.contents.allPages["Content2"].components[0][9].value}</h5>
								<p className="card-text">{this.props.contents.allPages["Content2"].components[0][10].value}</p>
								<p className="card-text"></p>
							</div>
						</div>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{this.props.contents.allPages["Content2"].components[0][11].value}</h5>
								<p className="card-text">{this.props.contents.allPages["Content2"].components[0][12].value}</p>
								<p className="card-text"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class Content3 extends React.Component {
	constructor() {
		super();
		let ratingArr=Array(5).fill(0);
	}
	componentClick(content, p) {
		// console.info(p);
		this.props.componentClick(content, p);
	}
	render() {
		return (
			<div className={this.props.window == "Build" ? "selectDiv" : ""} id="title" onClick={(e) => this.props.window == "Build" && this.componentClick("Content3", 0, e)} style={{ 'border': this.props.window == "Build" && this.props.contents.curBuildComponent[0] == "Content3" && this.props.contents.curBuildComponent[1] == 0 && '2px solid red' }}>
				<div style={this.props.contents.allPages["Content3"].components[0][0].value == "Black" ? { 'backgroundColor': 'black', 'color': 'white' } : {}}>
					<div className="text-center" >
						<h3>{this.props.contents.allPages["Content3"].name}</h3>
					</div>
					<form className="container">
						<fieldset>
							<legend>{this.props.contents.allPages["Content3"].components[0][1].value}</legend>
							<div className="form-group row">
								<label htmlFor="staticUser" className="col-sm-2 col-form-label">{this.props.contents.allPages["Content3"].components[0][2].value}</label>
								<div className="col-sm-10">
									<input type="text" readOnly className="form-control-plaintext" id="staticUser" defaultValue={this.props.contents.allPages["Content3"].components[0][3].value} />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">{this.props.contents.allPages["Content3"].components[0][4].value}</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
								<small id="emailHelp" className="form-text text-muted">{this.props.contents.allPages["Content3"].components[0][5].value}</small>
							</div>
							<div className="form-group">
								<label htmlFor="exampleSelect1">{this.props.contents.allPages["Content3"].components[0][6].value}</label>
								<select className="form-control" id="exampleSelect1">
									{
										this.props.contents.allPages["Content3"].components[0][7].value.map((val, i) => {
											return <option key={i}>{val}</option>
										})
									}
								</select>
							</div>
							<div className="form-group">
								<label htmlFor="exampleTextarea">{this.props.contents.allPages["Content3"].components[0][8].value}</label>
								<textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} />
							</div>
							<fieldset className="form-group">
								<legend>{this.props.contents.allPages["Content3"].components[0][9].value}</legend>
								{
									Array.from({length: this.props.contents.allPages["Content3"].components[0][10].value}, (v, k) => k+1).map((val, i) => {
										return <div className="form-check" key={i}>
											<label className="form-check-label radio-inline">
												<input type="radio" className="form-check-input" name="rating" id={"rating"+i} defaultValue="1"  />
												{val}
											</label>
										</div>
									})
								}
							</fieldset>
							<button type="submit" className="btn btn-primary">Submit</button>
						</fieldset>
					</form>
							<br />
				</div>
			</div>
		)
	}
}

class Content4 extends React.Component {
	constructor() {
		super();
	}
	componentClick(content, p) {
		// console.info(p);
		this.props.componentClick(content, p);
	}
	render() {
		return (
			<div className={this.props.window == "Build" ? "selectDiv" : ""} id="title" onClick={(e) => this.props.window == "Build" && this.componentClick("Content4", 0, e)} style={{ 'border': this.props.window == "Build" && this.props.contents.curBuildComponent[0] == "Content4" && this.props.contents.curBuildComponent[1] == 0 && '2px solid red' }} >
				<div style={this.props.contents.allPages["Content4"].components[0][0].value == "Black" ? { 'backgroundColor': 'black', 'color': 'white' } : {}}>
					<div className="text-center" >
						<h3>{this.props.contents.allPages["Content4"].name}</h3>
					</div>
					<p>
						{this.props.contents.allPages["Content4"].components[0][1].value}
					</p>
				</div>

			</div>
		)
	}
}

var mapStateToProps = (state) => {
	return {
		contents: state.contents
	};
}

var mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ nav: cnav, componentClick: componentClick }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);

