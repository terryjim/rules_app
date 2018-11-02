//错误信息
let sample = {show:true,'code':0,'msg':''}
const success = (state = {}, action) => {
    if (action.type === 'SHOW_SUCCESS') {   
       
        if (action.msg != null)
            state = Object.assign({},{show:true,msg:action.msg})
        /* else
            state = {} */
    }
    if (action.type === 'CLOSE_SUCCESS') { 
            state = Object.assign({},{show:false})       
    }
    return state;
}
export default success;