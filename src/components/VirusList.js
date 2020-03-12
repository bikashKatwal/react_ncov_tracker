import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCases } from "../actions";
import CountrySelect from "./CountrySelect";

class VirusList extends Component {
  state = {
    value: "Australia"
  };

  componentDidMount() {
    this.props.fetchCases(this.state.value);
  }

  getSelectedData = () => {
    this.props.fetchCases(this.state.value);
  };

  onChangeHandler = value => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <p></p>
        <CountrySelect
          value={this.state.value}
          changeHandler={this.onChangeHandler}
          onClick={this.getSelectedData}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cases: state.cases
  };
};
export default connect(mapStateToProps, { fetchCases })(VirusList);
