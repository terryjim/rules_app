//楼栋列表
let sample = [
    {
        "name": "绿地香树花城",
        "id": '196015270102325730',
        "projectId": 1
    },
    {
        "name": "当代·光谷梦工场",
        "id": '196015529964624350',
        "projectId": 2
    },
]
const buildingList = (state = [], action) => {
    if (action.type === 'FILL_BUILDING_LIST') {
        console.log(action.data)
        if (action.data != null)
            state = [].concat(action.data)

        console.log(state)
    }
    return state;
}
export default buildingList;