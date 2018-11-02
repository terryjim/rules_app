import { loaded, loading, showError,checkStatus } from "./common";
//获取硬件状态列表
export const checkHardwareStatus = () => dispatch => {
    //不能用headers=new Headers()，否则跨域出错
    /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    //orderBy
    //let body = JSON.stringify({ whereSql, page, size, sort })
    let body = JSON.stringify({})
    let args = { method: 'POST', mode: 'cors', body, headers: headers, cache: 'reload' }
    let getUrl = window.TParams.urls['getHardwareStatus']   
    dispatch(loading("状态查询中..."))
    return fetch(getUrl, args).then(checkStatus).then(response => response.json())
        .then(json => {  
            dispatch(loaded())   
           // alert((json))       
            if (json.code !== 0)
                return dispatch(showError(json.msg + '<br>' + json.data))
            else
                return dispatch(setHardwareStatus(json.data))
        }).catch(e => {  
            dispatch(loaded())         
            if (e != undefined)
                return dispatch(showError(e.message))
            else
                return dispatch(showError('系统异常，请稍后再试！<br/>'))
        }
        )
}
//获取列表回调
export const setHardwareStatus = (json) => (
    {
        type: 'CHECK_HARDWARE_STATUS',
        data: json
    }
)
