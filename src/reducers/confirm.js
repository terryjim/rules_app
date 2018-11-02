//确认信息
//show:是否显示确认窗口，confirm:确认、取消，msg；确认窗口显示信息，module；模块名，以确保是当前模块引发的确认窗口,operate:操作
let sample = {show:true,confirm:false,msg:'是否删除选中的记录？',module:'admin',operate:'del'}
const confirm = (state = {}, action) => {
    if (action.type === 'SHOW_CONFIRM') {          
        if (action.msg != null)
            state = Object.assign({},{show:true,msg:action.msg,confirm:false,module:action.module,operate:action.operate})        
    }
    if (action.type === 'CLOSE_CONFIRM') { 
            state = Object.assign({},{show:false,confirm:false})       
    }
    if (action.type === 'CONFIRM') { 
        state = Object.assign({},{show:false,confirm:true,module:action.module,operate:action.operate})       
}
    return state;
}
export default confirm;