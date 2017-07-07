/* 足し算の結果を保持し、どんどん足していく */
// state: それまで合計値
const addition = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_ONE_VALUE':
      return state + action.value
    case 'CLEAR_VALUE':
      return 0
    default:
      return state
  }
}

export default addition
