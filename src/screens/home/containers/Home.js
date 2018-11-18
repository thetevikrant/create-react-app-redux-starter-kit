import React, { Component } from "react";
import { connect } from "react-redux";
import HomeMarkup from '../components/HomeMarkup';

class Home extends Component {
	render() {
		return <HomeMarkup />;
	}
}
export default connect(null, null)(Home);
