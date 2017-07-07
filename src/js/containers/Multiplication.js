import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { multiplication, multiplicationClearAddition, multiplicationOk, multiplicationNg } from '../actions'
import PropTypes from 'prop-types'
const classNames = require('classnames');

// isOk: 正常な状態かエラー状態かを表す
// total: 掛けた合計の値
let Multiplication = ({ isOk, total, dispatch }) => {
  let textInput = null;

  /**
   */
  const onClickToMultiply = (e) => {
    e.preventDefault()

    const val = parseFloat(textInput.value);
    if (_.isNaN(val)) {
      dispatch(multiplicationNg());
    } else {
      dispatch(multiplicationOk());
      dispatch(multiplication(val));
    }
  };

  /**
   */
  const onClickToClear = (e) => {
    e.preventDefault()
    dispatch(multiplicationOk());
    dispatch(multiplicationClearAddition());
  }

  return (
    <div>
      <form className="form-inline">
        <div className={classNames('form-group', {'has-error': !isOk, 'has-feedback': !isOk})}>
          <label htmlFor="exampleInputName3">掛け算</label>
          <input type="text" className="form-control" id="exampleInputName3" placeholder="10"
             defaultValue="2"
             ref={(input) => { textInput = input; }}
          />
          <span className={classNames('glyphicon', 'glyphicon-remove', 'form-control-feedback', {'hidden':isOk})} aria-hidden="true"></span>
          <span id="inputError3Status" className={classNames("sr-only", {'hidden':isOk})}>(error)</span>
        </div>
        <button type="submit" className="btn btn-success" onClick={onClickToMultiply}>掛ける</button>
        <button type="submit" className="btn btn-danger" onClick={onClickToClear}>クリア</button>
        <label className="control-label">合計</label>
        <p className="form-control-static simple-calc-result">{total}</p>
        <span className={classNames('text-danger', 'errMsg', {'hidden':isOk})}>エラーです。</span>
      </form>
    </div>
  )
}

Multiplication.propTypes = {
  total: PropTypes.number,
  isOk: PropTypes.bool
};

const mapStateToProps = (state/*, ownProps*/) => {
  const props = {
    total: state.multiplication
  };
  props.isOk = state.multiplicationStatus;
  return props;
}

Multiplication = connect(
  mapStateToProps
)(Multiplication)

export default Multiplication
