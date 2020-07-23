import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  token: state.token,
  wildpoints: state.wildpoints,
  id: state.id
});

function Casino({ wildpoints }) {
  return (
    <div className="block">
      <p>{wildpoints}</p>
    </div>
  )
};

export default connect(mapStateToProps)(Casino);