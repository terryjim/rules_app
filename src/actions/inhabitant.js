import { loaded, loading, showError } from "./common";
//根据房号获取绑定的住户列表
export const getInhabitantsByRoom = (values) =>dispatch=> {   
    //不能用headers=new Headers()，否则跨域出错
    /*let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };*/
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    let body = JSON.stringify(values)
    let args = { method: 'POST', mode: 'cors', body,headers, cache: 'reload' }
    let getUrl = window.TParams.urls['getInhabitantsByRoom']
    return fetch(getUrl, args).then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.code !== 0) {               
                console.log(json.msg)
                return dispatch(showError(json.msg + '<br>' + json.data))
            }
            else {
                console.log(json.data)
                dispatch(fillInhabitants(values,json.data))
            }
        }).catch(e => {
            return dispatch(showError('网络异常，请稍后再试！<br/>' + e))
        })
}
//新增或修改后的记录更新列表
export const fillInhabitants = (location,values) => {   
    return {
        type: 'FILL_INHABITANTS_BY_ROOM',
        data: values,
        location
    }
}