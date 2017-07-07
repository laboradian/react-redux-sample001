/* 足し算の状態 */
// state: true 正常, false エラーあり
const additionStatus = (state = true, action) => {
  switch (action.type) {
    case 'ADD_STATUS_OK':
      return true
    case 'ADD_STATUS_NG':
      return false
    default:
      return state
  }
}

export default additionStatus
