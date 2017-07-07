import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { addition, clearAddition, additionOk, additionNg } from '../actions'
import PropTypes from 'prop-types'
const classNames = require('classnames');

// isOk: 正常な状態かエラー状態かを表す
// total: 足した合計の値
let Addition = ({ isOk, total, dispatch }) => {
  let textInput = null;

  /**
   */
  const onClickToAdd = (e) => {
    e.preventDefault()

    const val = parseInt(textInput.value);
    if (_.isNaN(val)) {
      dispatch(additionNg());
    } else {
      dispatch(additionOk());
      dispatch(addition(val));
    }
  };

  /**
   */
  const onClickToClear = (e) => {
    e.preventDefault()
    dispatch(additionOk());
    dispatch(clearAddition());
  }

  return (
    <div>
      <form className="form-inline">
        <div className={classNames('form-group', {'has-error': !isOk, 'has-feedback': !isOk})}>
          <label htmlFor="exampleInputName1">足し算</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="10"
             defaultValue="100"
             ref={(input) => { textInput = input; }}
          />
          <span className={classNames('glyphicon', 'glyphicon-remove', 'form-control-feedback', {'hidden':isOk})} aria-hidden="true"></span>
          <span id="inputError2Status" className={classNames("sr-only", {'hidden':isOk})}>(error)</span>
        </div>
        <button type="submit" className="btn btn-success" onClick={ onClickToAdd }>足す</button>
        <button type="submit" className="btn btn-danger" onClick={onClickToClear}>クリア</button>
        <label className="control-label">合計</label>
        <p className="form-control-static simple-calc-result">{total}</p>
        <span className={classNames('text-danger', 'errMsg', {'hidden':isOk})}>エラーです。</span>
      </form>
    </div>
  )
}

Addition.propTypes = {
  total: PropTypes.number,
  isOk: PropTypes.bool
};

const mapStateToProps = (state/*, ownProps*/) => {
  const props = {
    total: state.addition
  };
  props.isOk = state.additionStatus;
  return props;
}

Addition = connect(
  mapStateToProps
)(Addition)

export default Addition
