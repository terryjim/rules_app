//管理员表单
let sample = 
    {'id':'',
    'loginName':'',
    'realName':'',
    'regDate':''}

const cForm = (state ={}, action) => {
    if (action.type === 'FILL_FORM') {
        console.log(action.data)
       return {data:action.data}
    }
    
    return state;
}
export default cForm;