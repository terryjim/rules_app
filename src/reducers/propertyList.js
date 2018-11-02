//管理员列表
/* let sample = [
    {
      "name": "长城物业",
      "id": '196015270102325730',     
    },
    {
      "name": "当代物业",
      "id": '196015529964624350',     
    },
] */
const propertyList = (state = [], action) => {
    if (action.type === 'FILL_PROPERTY_LIST') {
        if (action.data != null)
            state = [].concat(action.data)
        console.log(state)
    }    
    return state;
}
export default propertyList;