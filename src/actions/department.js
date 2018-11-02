import { loaded, loading, showError, checkStatus, showSuccess, addToGrid, getListResult } from "./common";
import {loginOut} from "./auth"


//设置短信接收号码
export const setMsgPhone = (values) => dispatch => {
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    let body = JSON.stringify(values)
    let args = { method: 'POST', mode: 'cors', headers: headers, body, cache: 'reload' }
    let saveUrl = window.TParams.urls['setMsgPhone']
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
               // dispatch(addToGrid(json.data))
                //回传添加或修改后的记录id,用于页面标识修改痕迹
                //alert(json.data.id)
                // dispatch(addEditedIds([json.data.id]))
                dispatch(loginOut())
            }
        }).catch(e => {
            dispatch(loaded())
            return dispatch(showError('网络异常，请稍后再试！<br/>' + e))
        }
        )
}

//根据当前用户获取短信接收号码
export const getMsgPhone = () => dispatch => {
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    let args = { method: 'POST', mode: 'cors', headers: headers, cache: 'reload' }
    let getUrl = window.TParams.urls['getMsgPhone']
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