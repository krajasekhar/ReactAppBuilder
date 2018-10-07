import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cnav, propChange, navChange } from './actions';
import Content from './content';
// import styles from 'bootswatch/dist/cerulean/bootstrap.min.css';

class Builder extends React.Component {
	constructor(props) {
		super(props);

		this.navSelectItems = this.navSelectItems.bind(this);
		this.navSelected = this.navSelected.bind(this);
		this.propChange = this.propChange.bind(this);
		this.navChange = this.navChange.bind(this);
		this.getBuildFields = this.getBuildFields.bind(this);
		this.navFields = this.navFields.bind(this);

	}
	componentDidMount() {

	}
	componentWillUnMount() {


	}
	nav(p, e) {
		this.props.nav(p);
	}
	navSelectItems() {
		let items = [];
		Object.keys(this.props.contents.allPages).forEach((key) => (
			items.push(<option key={key} value={key}>{this.props.contents.allPages[key].name}</option>)

		))
		return items;
	}
	navSelected(e) {
		// console.info("navSelected: " + e.target.value);
		this.props.cnav(e.target.value);
	}
	navFields() {
		let returnComp = null;
		returnComp = [returnComp, <div className="form-group" key="0">
			<label htmlFor="appName">App Name</label>
			<input type="text" className="form-control" id="appname" aria-describedby="appNameHelp" placeholder="Enter App Name"
				value={this.props.contents.appName} onChange={e => this.navChange(0, e)} />
			<small id="appNameHelp" className="form-text text-muted">Edit this field to reflect.</small>
		</div>];
		returnComp = [returnComp, <div className="form-group" key="0">
			<label htmlFor="navColor">Nav Color</label>
			<input type="color" className="form-control" id="navColor" aria-describedby="navColorHelp" placeholder="Enter Nav Color"
				value={this.props.contents.navColor} onChange={e => this.navChange(1, e)} />
			<small id="navColorHelp" className="form-text text-muted">Edit this field to reflect.</small>
		</div>];
		returnComp = [returnComp, <div className="form-group" key="0">
		<label htmlFor="txtColor">Text Color</label>
		<input type="color" className="form-control" id="txtColor" aria-describedby="txtColorHelp" placeholder="Enter Text Color"
			value={this.props.contents.txtColor} onChange={e => this.navChange(2, e)} />
		<small id="txtColorHelp" className="form-text text-muted">Edit this field to reflect.</small>
	</div>];
		Object.keys(this.props.contents.allPages).forEach((val, i) => {
			returnComp = [returnComp, <div className="form-group" key={i}>
				<label htmlFor={val}>{val}</label>
				<input type="text" className="form-control" id={val} aria-describedby={val + "Help"} placeholder={"Enter " + val}
					value={this.props.contents.allPages[val].name} onChange={e => this.navChange(val, e)} />
				<small id={val + "Help"} className="form-text text-muted">Edit this field to reflect.</small>
			</div>]
		});
		// console.info(returnComp);
		return <div>{returnComp}</div>;
	}
	getBuildFields(curBuildComponent) {
		let returnComp = null;
		if (curBuildComponent[1] == -1)
			return <div>{this.navFields()}</div>
		let curComponentArr = this.props.contents.allPages[curBuildComponent[0]].components[curBuildComponent[1]];
		// console.info(curComponentArr);
		curComponentArr.forEach((val, i) => {
			// console.info(val, i);			
			if (val.type == "text" || val.type == "color") {
				returnComp = [returnComp, <div className="form-group" key={i}>
					<label htmlFor={curComponentArr[i].name}>{curComponentArr[i].name}</label>
					<input type={val.type} className="form-control" id={curComponentArr[i].name + i} aria-describedby={curComponentArr[i].name + "Help"} placeholder={"Enter " + curComponentArr[i].name}
						value={curComponentArr[i].value} onChange={e => this.propChange(curBuildComponent[0], i, e)} />
					<small id={curComponentArr[i].name + "Help"} className="form-text text-muted">Edit this field to reflect.</small>
				</div>]
			}
			if (val.type == "textarea") {
				returnComp = [returnComp, <div className="form-group" key={i}>
					<label htmlFor={curComponentArr[i].name}>{curComponentArr[i].name}</label>
					<textarea className="form-control" id={curComponentArr[i].name + i} aria-describedby={curComponentArr[i].name + "Help"} placeholder={"Enter " + curComponentArr[i].name}
						value={curComponentArr[i].value} onChange={e => this.propChange(curBuildComponent[0], i, e)} />
					<small id={curComponentArr[i].name + "Help"} className="form-text text-muted">Edit this field to reflect.</small>
				</div>]
			}
			if (val.type == "multipleSelect") {
				returnComp = [returnComp, <div className="form-group" key={i}>
					<label htmlFor={curComponentArr[i].name}>{curComponentArr[i].name}</label>
					<select multiple className="form-control" id={curComponentArr[i].name+i} name={curComponentArr[i].name} id={curComponentArr[i].name + i} defaultValue={curComponentArr[i].options}  onChange={e => {let tmp={"target":{"value":Object.values(e.target.selectedOptions).map(val=>val.value)}};this.propChange(curBuildComponent[0], i, tmp)}} >
					{
						curComponentArr[i].options.map((opVal, j) => {
							// console.info(opVal,j);
							return <option key={j} value={opVal}>
									{opVal}
							</option>


						})
					}
					</select>
					<small id={curComponentArr[i].name + "Help"} className="form-text text-muted">Edit this field to reflect.</small>
				</div>]
			}
			if (val.type == "radio") {
				returnComp = [returnComp, <div className="form-group" key={i}>
					<legend>{curComponentArr[i].name}</legend>
					{
						curComponentArr[i].options.map((opVal, j) => {
							// console.info(opVal,j);
							return <div className="form-check" key={j}>
								<label className="form-check-label">
									<input type="radio" className="form-check-input" name={curComponentArr[i].name} id={curComponentArr[i].name + i + "_" + j} defaultValue={opVal} onChange={e => this.propChange(curBuildComponent[0], i, e)} defaultChecked={opVal==curComponentArr[i].value}/>
									{opVal}
								</label>
							</div>


						})
					}
					<small id={curComponentArr[i].name + "Help"} className="form-text text-muted">Edit this field to reflect.</small>
				</div>]
			}
			if (val.type == "multiple") {
				returnComp = [returnComp, <div className="form-group" key={i}>
					<label htmlFor={curComponentArr[i].name}>{curComponentArr[i].name}</label>
					<select className="form-control" id={curComponentArr[i].name+i} name={curComponentArr[i].name+i} id={curComponentArr[i].name + i} defaultValue={5}  onChange={e => {this.propChange(curBuildComponent[0], i, e)}} >
					{
						curComponentArr[i].options.map((opVal, j) => {
							// console.info(opVal,j);
							return <option key={j} value={opVal}>
									{opVal}
							</option>


						})
					}
					</select>
					<small id={curComponentArr[i].name + "Help"} className="form-text text-muted">Edit this field to reflect.</small>
				</div>]
			}
		});

		return <div>
			{returnComp}
		</div>
	}
	propChange(content, index, e) {
		// console.info("propChange: " + Object.values(Object.values(e.target)[0]));
		// console.info(e.target.value);
		this.props.propChange(content, index, e.target.value);
	}
	navChange(index, e) {
		// console.info("navChange: " + e.target.value);
		this.props.navChange(index, e.target.value);
	}
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-9">
						<Content window="Build" />
					</div>
					<div className="col-3 float-right" style={{ border: '1px solid grey' }}>
						<form>
							<fieldset>
								<legend>Builder</legend>
								<div className="form-group">
									<label htmlFor="navSelect" >Nav select</label>
									<select className="form-control" onChange={this.navSelected} id="navSelect">
										{
											this.navSelectItems()
										}
									</select>
								</div>
								<hr />
								{
									this.getBuildFields(this.props.contents.curBuildComponent)
								}
							</fieldset>
						</form>

					</div>
				</div>
			</div>
		)
	}
};


var mapStateToProps = (state) => {
	return {
		contents: state.contents
	};
}

var mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ cnav: cnav, propChange: propChange, navChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Builder);

