/* 掛け算の結果を保持し、どんどん掛けていく */
// state: それまでの積算値
const multiplication = (state = 1, action) => {
  switch (action.type) {
    case 'MULTIPLICATION_ONE_VALUE':
      return state * action.value
    case 'MULTIPLICATION_CLEAR_VALUE':
      return 1
    default:
      return state
  }
}

export default multiplication
