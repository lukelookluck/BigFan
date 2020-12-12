import React from 'react';
import {connect} from 'react-redux';
import StarPage from '../../pages/StarPage';
import {receive} from '../modules/StarPageInit';

function StarPageContainer({HomeArticles, route}) {
  return <StarPage HomeArticles={HomeArticles} starName={route.params.name} />;
}

function mapStateToProps(state) {
  return {
    HomeArticles: state.StarPageInit.HomeArticles,
  };
}

// props 로 넣어줄 액션 생성함수
function mapDispatchToProps(dispatch) {
  return {
    changeColor: (color) => dispatch(changeColor(color)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarPageContainer);
