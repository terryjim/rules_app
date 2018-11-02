import { loaded, loading, showError, checkStatus, showSuccess,closeConfirm } from "./common";
import { fillInhabitants } from "./inhabitant"
//标记处理完成
export const markCompleted = (ids) => dispatch => {
    //关闭确认窗口
    dispatch(closeConfirm())
    let headers = { 'Content-Type': 'application/json' };
    headers.Authorization = window.sessionStorage.accessToken
    let body = JSON.stringify(ids)
    let args = { method: 'POST', mode: 'cors', headers: headers, body, cache: 'reload' }
    let markUrl = window.TParams.urls['markTicketCompleted']
    dispatch(loading("数据导入中..."))
    return fetch(markUrl, args).then(checkStatus).then(response => {
        return (response.json())
    })
        .then(json => {
            dispatch(loaded())
            if (json.code !== 0) {
                console.log(json.msg)
                return dispatch(showError(json.msg + '<br>' + json.data))
            }
            else {
                dispatch(showSuccess('成功标记完成' + json.data + '条记录！'))
                //更新视图状态
                dispatch(markToGrid(ids))
            }
        }).catch(error => {
            dispatch(loaded())
            if (error.response === undefined) {
                return dispatch(showError('远程服务器连接异常，请稍后再试！<br/>'))
            }
            return dispatch(showError('其它异常，请稍后再试！<br/>' + error))
        })
}


//新增或修改后的记录更新列表
export const markToGrid = (values) => {
return {
type: 'MARK_TO_GRID',
data: values
}
}
