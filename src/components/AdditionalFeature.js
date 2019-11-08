import React from 'react';
import {addFeature} from "../actions"
import {connect} from "react-redux"

const AdditionalFeature = props => {
  const {addFeature} = props
  return (
    <li>
      <button className="button" onClick={()=>addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null,{addFeature})(AdditionalFeature);
