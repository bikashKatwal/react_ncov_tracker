import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCases } from "../actions";
import CountrySelect from "./CountrySelect";
import CardDetail from "./CardDetail";

class VirusList extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    console.log(this.state.value.label);
    this.props.fetchCases(this.state.value.label);
  }

  getSelectedData = () => {
    console.log(this.state.value);
    this.props.fetchCases(this.state.value.label);
  };

  onChangeHandler = value => {
    this.setState({ value });
  };
  getAlldata = () => {
    const { cases } = this.props;
    if (cases) {
      return cases.map((item, index) => {
        return <CardDetail key={index} caseData={item} />;
      });
    }
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
        <p></p>
        {this.getAlldata()}
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
