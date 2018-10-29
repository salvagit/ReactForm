import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field } from "redux-form"

import Dropdown from "../../components/Dropdown"
import { getProvinces, getLocality } from '../../actions/provinces.actions';

class ProvinceLocality extends Component {

  componentWillMount() {
    this.props.getProvinces();
  }

  render() {
    return (
      <div className="row">
        <div className="col col-6">
          <Field
            name="province"
            component={Dropdown}
            label="Provincia"
            options={this.props.provinces}
            callback={this.props.getLocality}
          />
        </div>
    
        <div className="col col-6">
          <Field
            name="locality"
            component={Dropdown}
            label="Localidad"
            options={this.props.cities}
          />
        </div>
      </div>
    );
  }
}

const mapStateTopProps = state => ({
  provinces: state.provinces.provinces,
  cities: state.provinces.locality.cities,
  state
});

const mapDispatchTopProps = dispatch => ({
  getProvinces: () => dispatch(getProvinces()),
  getLocality: province_id => dispatch(getLocality(province_id))
});

export default connect(mapStateTopProps, mapDispatchTopProps)(ProvinceLocality);