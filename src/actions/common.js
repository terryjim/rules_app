//判断返回状态码
export const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    if (response.status === 401) {
        throw (new Error("对不起，您没有权限访问此资源，请重新登录！"))
    }
    else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}
//页面刷新中
export const loading = (msg) => (
    {
        type: 'LOADING',
        msg
    }
)
//页面刷新中
export const loaded = () => (
    {
        type: 'LOADED'
    }
)
//显示错误信息
export const showError = (msg) => ({
    type: 'SHOW_ERROR',
    msg,
})
//关闭错误信息
export const closeError = () => ({
    type: 'CLOSE_ERROR'
})
//显示确认窗口
export const showConfirm = (msg, module, operate) => ({
    type: 'SHOW_CONFIRM',
    msg,
    module,
    operate
})
//选中确认按钮
export const confirm = (module, operate) => ({
    type: 'CONFIRM',
    module,
    operate
})
//关闭确认窗口
export const closeConfirm = () => ({
    type: 'CLOSE_CONFIRM'
})
//显示成功信息
export const showSuccess = (msg) => {
    return ({
        type: 'SHOW_SUCCESS',
        msg,
    })
}
//关闭成功信息
export const closeSuccess = () => ({
    type: 'CLOSE_SUCCESS'
})

//修改或添加记录的ＩＤ列表，用于标识文档修改状态
/* export const addEditedIds = (data) => ({
    type: 'ADD_EDITED_IDS',
    ids: data
}) */
export const clearEditedIds = () => ({
    type: 'CLEAR_EDITED_IDS'
})
//删除列表
export const delList = (ids, module) => dispatch => {
    //关闭确认窗口
    dispatch(closeConfirm())
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    let body = JSON.stringify(ids)
    let args = { method: 'POST', mode: 'cors', headers: headers, body, cache: 'reload' }
    //如果配置文件中没有专门的删除api则采用约定api地址
    let delUrl = window.TParams.urls['del_' + module]
    if (delUrl == undefined || delUrl === '')
        delUrl = window.TParams.defaultUrl + module + '/del'
    ///////////////////////////////////////////////////////////////////
    //以下部分为测试用，后台API修改后删除些段
    /*   dispatch(showSuccess('删除成功！'))  //显示删除成功信息
      dispatch(delFromGrid(ids, module))    //从列表中删除 
return */
    //以上部分为测试用，后台API修改后删除些段
    ///////////////////////////////////////////////////////////////////

    return fetch(delUrl, args).then(response => response.json())
        .then(json => {
            // console.log(json)
            //  console.log(json.data)
            if (json.code !== 0) {
                // console.log(json.msg)
                return dispatch(showError(json.msg + '<br>' + json.data))
            }
            else {
                dispatch(showSuccess('成功删除' + json.data + '条记录！'))  //显示删除成功信息
                dispatch(delFromGrid(ids, module))    //从列表中删除 
            }
        }).catch(e => {
            return dispatch(showError('网络异常，请稍后再试！<br/>' + e))
        }
        )
}
//删除记录后更新列表
export const delFromGrid = (ids, module) => {
    //alert(values)
    return {
        type: 'DEL_FROM_GRID',
        data: ids
    }
}
//获取列表
export const getList = ({ whereSql, page, size, sort }, module) => dispatch => {
    //不能用headers=new Headers()，否则跨域出错
    /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    //orderBy
    let body = JSON.stringify({ whereSql, page, size, sort })
    let args = { method: 'POST', mode: 'cors', body, headers: headers, cache: 'reload' }
    let getUrl = window.TParams.urls['get_' + module + '_list']
    if (getUrl == undefined || getUrl === '')
        getUrl = window.TParams.defaultUrl + module + '/getByPage'
    return fetch(getUrl, args).then(checkStatus).then(response => response.json())
        .then(json => {

            if (json.code !== 0)
                return dispatch(showError(json.msg + '<br>' + json.data))
            else
                return dispatch(getListResult(json.data))
        }).catch(e => {
            if (e != undefined)
                return dispatch(showError(e.message))
            else
                return dispatch(showError('系统异常，请稍后再试！<br/>'))
        }
        )
}
//获取列表回调
export const getListResult = (json) => (
    {
        type: 'GET_LIST',
        data: json
    }
)
export const clearCList = () => (
    { type: 'CLEAR_LIST' }
)
//保存表单
export const saveForm = (values, module) => dispatch => {
    //不能用headers=new Headers()，否则跨域出错
    /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken

    let body = JSON.stringify(values)
    //let body = values
    let args = { method: 'POST', mode: 'cors', headers: headers, body, cache: 'reload' }
    let saveUrl = window.TParams.urls['save_' + module]
    if (saveUrl == undefined || saveUrl === '')
        saveUrl = window.TParams.defaultUrl + module + '/save'
    dispatch(loading())
    return fetch(saveUrl, args).then(response => response.json())
        .then(json => {
            dispatch(loaded())
            if (json.code !== 0) {
                return dispatch(showError(json.msg + '<br>' + json.data))
            }
            else {
                dispatch(showSuccess('保存成功！'))
                //回传添加或修改后的记录    
                dispatch(addToGrid(json.data))
                //回传添加或修改后的记录id,用于页面标识修改痕迹
                //alert(json.data.id)
                //   dispatch(addEditedIds([json.data.id]))
            }
        }).catch(e => {
            dispatch(loaded())
            return dispatch(showError('网络异常，请稍后再试！<br/>' + e))
        }
        )
}

//新增或修改后的记录更新列表
export const addToGrid = (values) => {
    return {
        type: 'ADD_TO_GRID',
        data: values
    }
}

//根据返回
export const fillForm = (json) => (
    {
        type: 'FILL_FORM',
        data: json
    }
)