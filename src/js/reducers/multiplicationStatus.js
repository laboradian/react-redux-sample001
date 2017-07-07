/* 掛け算の状態 */
// state: true 正常, false エラーあり
const multiplicationStatus = (state = true, action) => {
  switch (action.type) {
    case 'MULTIPLICATION_STATUS_OK':
      return true
    case 'MULTIPLICATION_STATUS_NG':
      return false
    default:
      return state
  }
}

export default multiplicationStatus
