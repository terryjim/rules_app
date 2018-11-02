//错误信息
let sample = { show: true, 'msg': '数据提交中' }
const loading = (state = {}, action) => {
    if (action.type === 'LOADING') {
        state = Object.assign({}, { show: true, msg: action.msg })
    }
    if (action.type === 'LOADED') {
        state = Object.assign({}, { show: false })
    }
    return state;
}
export default loading;