const user = (state = null, action) => {
    if (action.type === 'LOGINED') {
       // alert(JSON.stringify(action))
        //state = Object.assign({}, { token: action.token, userName: action.userName, expired: action.expired, propertyId: action.propertyId, propertyProjectId: action.propertyProjectId, companyName: action.companyName })
        state=Object.assign({},state, action)  
    }
    if (action.type === 'LOGIN_OUT') {
        state = Object.assign({}, null)
    }
    if (action.type === 'LOGIN_FAILURE') {
        state = Object.assign({}, null)
    }
    return state;

}
export default user;