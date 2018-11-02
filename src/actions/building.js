import { loaded, loading, showError, checkStatus, showSuccess, addToGrid,  getListResult } from "./common";

//根据项目部ID获取楼栋列表
export const getBuildingsByDepartment = (did = 0) => dispatch => {
    //不能用headers=new Headers()，否则跨域出错
    /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    //orderBy
    //let body = JSON.stringify({ did })
    let args = { method: 'POST', mode: 'cors', headers: headers, cache: 'reload' }
    let getUrl = window.TParams.urls['getBuildingsByDepartment']
    if (did != 0)
        getUrl += '?did=' + did
    return fetch(getUrl, args).then(checkStatus).then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.code !== 0)
                return dispatch(showError(json.msg + '<br>' + json.data))
            else
                return dispatch(getBuildingListResult(json.data))
        }).catch(e => {
            if (e.response === undefined) {
                return dispatch(showError('远程服务器连接异常，请稍后再试！<br/>'))
            }
            if (e != undefined)
                return dispatch(showError(e))
            else
                return dispatch(showError('系统异常，请稍后再试！<br/>'))
        }
        )
}
//获取列表回调
export const getBuildingListResult = (json) => (
    {
        type: 'FILL_BUILDING_LIST',
        data: json
    }
)


//设置楼栋客服电话
export const setHotline = (values) => dispatch => {
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken  
    let body = JSON.stringify(values)   
    let args = { method: 'POST', mode: 'cors', headers: headers, body, cache: 'reload' }
    let saveUrl = window.TParams.urls['setHotline']
    dispatch(loading())
    return fetch(saveUrl, args).then(response => response.json())
        .then(json => {
            dispatch(loaded())           
            if (json.code !== 0) {
                console.log(json.msg)
                return dispatch(showError(json.msg + '<br>' + json.data))
            }
            else {
                dispatch(showSuccess('保存成功！'))
                //回传添加或修改后的记录    
                dispatch(addToGrid(json.data))
                //回传添加或修改后的记录id,用于页面标识修改痕迹
                //alert(json.data.id)
               // dispatch(addEditedIds([json.data.id]))
            }
        }).catch(e => {
            dispatch(loaded())
            return dispatch(showError('网络异常，请稍后再试！<br/>' + e))
        }
        )
}

//根据当前用户（或指定项目部id）获取服务热线号码列表
export const getHotlines = ({ whereSql, page, size,orderBy}) => dispatch => {
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken    
    let body = JSON.stringify({ whereSql, page, size, orderBy })
    let args = { method: 'POST', mode: 'cors',body,  headers: headers, cache: 'reload' }
    let getUrl = window.TParams.urls['getHotlines']
    
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