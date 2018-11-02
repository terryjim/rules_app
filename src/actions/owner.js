import { loaded, loading, showError, checkStatus, showSuccess } from "./common";
import {fillInhabitants} from "./inhabitant"
//上传住客信息
export const uploadOwners = (formData) => dispatch => {
    //不能用headers=new Headers()，否则跨域出错
    //let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    //let headers = { 'Content-Type': 'multipart/form-data;boundary=3750d8ce0a824a1b95830b89e5e1822e' };
    let headers = {}
    headers.Authorization = window.sessionStorage.accessToken
    let body = formData
    body.Authorization = window.sessionStorage.accessToken
    let args = { method: 'POST', mode: 'cors', headers, body, cache: 'reload' }
    let getUrl = window.TParams.urls['uploadOwners']
    dispatch(loading("数据导入中..."))
    return fetch(getUrl, args).then(checkStatus).then(response => {
        return (response.json())
    })
        .then(json => {
            dispatch(loaded())
            if (json.code !== 0) {
                console.log(json.msg)
                return dispatch(showError(json.msg + '<br>' + json.data))
            }
            else {
                dispatch(showSuccess(json.data))
            }
        }).catch(error => {
            dispatch(loaded())
            if (error.response === undefined) {
                return dispatch(showError('远程服务器连接异常，请稍后再试！<br/>'))
            }
            return dispatch(showError('其它异常，请稍后再试！<br/>' + error))
        })
}



//保存管理员
export const bindRoom = (values) => dispatch => {
    //不能用headers=new Headers()，否则跨域出错
    /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    console.log(values)
    let body = JSON.stringify(values)
    //let body = values
    let args = { method: 'POST', mode: 'cors', headers: headers, body, cache: 'reload' }
    let saveUrl = window.TParams.urls['bindRoom']     

    return fetch(saveUrl, args).then(response => response.json())
        .then(json => {
            console.log(json)
            console.log(json.data)
            if (json.code !== 0) {
                console.log(json.msg)
                return dispatch(showError(json.msg + '<br>' + json.data))
            }
            else {
                dispatch(showSuccess('保存成功！'))
                dispatch(fillInhabitants({buildingId:values.buildingId,unit:values.unit,floor:values.floor,room:values.room},json.data))
                //回传添加或修改后的记录    
                //dispatch(addToGrid(json.data))
                //回传添加或修改后的记录id,用于页面标识修改痕迹
                //alert(json.data.id)
                //dispatch(addEditedIds([json.data.id]))
            }
        }).catch(e => {
            return dispatch(showError('网络异常，请稍后再试！<br/>' + e))
        }
        )
}
//上传门禁卡信息
export const uploadCards = (formData) => dispatch => {
    //不能用headers=new Headers()，否则跨域出错
    //let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    //let headers = { 'Content-Type': 'multipart/form-data;boundary=3750d8ce0a824a1b95830b89e5e1822e' };
    let headers = {}
    headers.Authorization = window.sessionStorage.accessToken
    let body = formData
    body.Authorization = window.sessionStorage.accessToken
    let args = { method: 'POST', mode: 'cors', headers, body, cache: 'reload' }
    let getUrl = window.TParams.urls['uploadCards']
    dispatch(loading("数据导入中..."))
    return fetch(getUrl, args).then(checkStatus).then(response => {
        return (response.json())
    })
        .then(json => {
            dispatch(loaded())
            if (json.code !== 0) {
                console.log(json.msg)
                return dispatch(showError(json.msg + '<br>' + json.data))
            }
            else {
                dispatch(showSuccess(json.data))
            }
        }).catch(error => {
            dispatch(loaded())
            if (error.response === undefined) {
                return dispatch(showError('远程服务器连接异常，请稍后再试！<br/>'))
            }
            return dispatch(showError('其它异常，请稍后再试！<br/>' + error))
        })
}
