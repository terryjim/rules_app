//错误信息
let sample = {show:true,'code':0,'msg':''}
const err = (state = {}, action) => {
    if (action.type === 'SHOW_ERROR') {       
        if (action.msg != null)
            state = Object.assign({},{show:true,msg:action.msg})
        /* else
            state = {} */
    }
    if (action.type === 'CLOSE_ERROR') { 
            state = Object.assign({},{show:false})       
    }
    return state;
}
export default err;