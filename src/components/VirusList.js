import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCases } from '../actions';

class VirusList extends Component {
	componentDidMount() {
		console.log(this.props);
		this.props.fetchCases();
	}
	render() {
		return (
			<div>
				<h1>Virus List</h1>
			</div>
		);
	}
}
const mapStateToProps = state => {
	console.log('List of Virus Cases', state);
	return {
		cases: state.cases,
	};
};
export default connect(mapStateToProps, { fetchCases })(VirusList);
