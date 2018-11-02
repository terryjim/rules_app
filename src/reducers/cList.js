//管理员列表
let sample = {
    "content": [
        {
            "id": "195884804934228449",
            "name": "坐标城",
            "category": "1",
            "public_area": [
                {
                    "id": 1,
                    "name": "公共区域A"
                }
            ],
            "address": {
                "c": "武汉市",
                "d": "东湖高新区",
                "p": "湖北省"
            },
            "remark": "楼盘描述1坐标城6xiugai"
        }, {
            "id": "195874794355317217",
            "name": "光谷新世1",
            "category": "1",
            "public_area": [
                {
                    "id": 1,
                    "name": "公共区域A"
                }
            ],
            "address": {
                "c": "武汉市",
                "d": "东湖高新区",
                "p": "湖北省"
            },
            "remark": "楼盘描述12"
        }

    ],
    "totalElements": 1,
    "totalPages": 1,
    "last": true,
    "number": 0,
    "size": 20,
    "sort": null,
    "first": true,
    "numberOfElements": 2,
    editedIds: [],//添加或编辑的id列表
}
const cList = (state = {}, action) => {
    if (action.type === 'GET_LIST') {
        if (action.data != null)
            state = Object.assign({}, action.data)
        else
            state = Object.assign({}, {})
        //console.log(state)
    }
    if (action.type === 'ADD_TO_GRID') {
        if (action.data != null) {
            //console.log(action.data)
            //如果存在相由的id说明是修改记录，则先删除state中原记录           
            let index = state.content.findIndex(v => v.id === action.data.id)
            if (index > -1)
                state.content.splice(index, 1, action.data);
            else
                state.content.splice(0, 0, action.data);
            if (state.editedIds === undefined)
                state.editedIds = [action.data.id]
            else
                state.editedIds.push(action.data.id)           
            state = Object.assign({}, state)

        }
    }
    if (action.type === 'DEL_FROM_GRID') {
        if (action.data != null) {
            //如果存在相由的id说明是修改记录，则先删除state中原记录  
            action.data.map(id => {
                let index = state.content.findIndex(v => v.id === id)
                if (index > -1)
                    state.content.splice(index, 1);
            })
            state = Object.assign({}, state)
        }
    }
    //分配楼栋后更新列表
    //action.data: {id:'',buildings:[]}
    if (action.type === 'ALLOT_BUILDINGS_MODIFY_GRID') {
        if (action.data != null) {
            let buildings = action.data.buildings
            //解除原来绑定buildings信息           
            state.content.map(s => {
                if (s.buildings != undefined) {
                    s.buildings = s.buildings.filter(item => {
                        //若项目部buildings列表中包含等分配楼栋id则删除
                        return buildings.indexOf(item.id) < 0
                    })
                }
            })
            //返回值id(项目部）,buildings（分配楼栋数组）            
            let index = state.content.findIndex(v => v.id === action.data.id)
            if (index > -1) {
                state.content[index].buildings = buildings.map(x => ({ id: x }))
            }
            state = Object.assign({}, state)
        }
    }
    if (action.type === 'CLEAR_LIST') {
        state = state = Object.assign({}, {})
    }
    if (action.type === 'MARK_TO_GRID') {
        if (action.data != null) {
            let ids = action.data
            ids.forEach(element => {
                let index = state.content.findIndex(v => v.id === element)
                if (index > -1)
                    state.content[index].processState = 1;
            });
            state = Object.assign({}, state)
        }
    }
    //查询硬件设备在线状态后附加在硬件列表中
    if (action.type === 'CHECK_HARDWARE_STATUS') {
        if (action.data != null) {
            let data = action.data
            let lastDetected = data.now
            let content = data.content
            state.content.map(s => {
                let index = content.findIndex(v => v.code === s.hardwareCode)
                //status 0:未登记，1：在线，2：超时
                if (index > -1) {
                    lastDetected - content[index].updated <= 100 ? s['status'] = 1 : s['status'] = 2
                    let updated = content[index].updated
                    try {
                        updated = updated.substring(0, 4) + '-' + updated.substring(4, 6) + '-' + updated.substring(6, 8) + ' ' + updated.substring(8, 10) + ':' + updated.substring(10, 12) + ':' + updated.substring(12, 14)
                    } catch (e) {
                    }
                    s['updated'] = updated
                } else {
                    s = { ...s, status: 0 }
                }
            })
            state = Object.assign({}, state)
        }
    }
    return state;
}
export default cList;