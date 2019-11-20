import React from 'react';
import {removeFeature} from "../actions"
import {connect} from "react-redux"

const AddedFeature = props => {
  const {removeFeature} = props
  return (
    <li>
      <button className="button" onClick={()=>removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null,{removeFeature})(AddedFeature);
