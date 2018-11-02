//管理员列表
let sample = [{
    buildingId: 1, location: { "unit": 1, "floor": 1, "room": 1 }, inhabitants: [{
        "category": 1,
        "createdBy": "190067307070118369",
        "createdTime": "2018-05-15 14:49:12",
        "id": "1",
        "inhabitant": "190067307070118369",
        "isAuthenticated": true,
        "isDeleted": false,
        "isManager": true,
        "name": "老戴户主",
        "ownerId": "1",
        "updatedTime": "2018-05-31 16:45:58"
    }]
}]
const inhabitantList = (state = [], action) => {
    if (action.type === 'FILL_INHABITANTS_BY_ROOM') {
        let location = action.location
        if (location === undefined)
            return state;
        let buildingId = location.buildingId
        if (buildingId === undefined)
            return state;
        //如果原state包含该房号信息则更新state否则添加信息
        let index = state.findIndex(value => {
            return value.buildingId === buildingId && value.location.unit === location.unit && value.location.floor === location.floor && value.location.room === location.room
        })
        if (index > -1) {
            state.splice(index, 1, { buildingId: buildingId, location: { unit: location.unit, floor: location.floor, room: location.room },inhabitants:action.data})
        } else {
            state = state.concat({ buildingId: buildingId, location: { unit: location.unit, floor: location.floor, room: location.room },inhabitants:action.data })
        }       
    }
   // alert(JSON.stringify(state))
    return state;
}
export default inhabitantList