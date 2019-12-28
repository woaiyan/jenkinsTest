const User = (state = {
    users:[{id:1}],
    background:true
}, action) => {

    let arr = [];
    let temp = {
        background:state.background,
        users:[]
    }
    switch (action.type) {
        case 'ADD_User':
            arr = [...state.users,{id:action.id}]
            return  Object.assign(temp,{users:arr});
        case 'DELETE':
             arr = state.users.filter(item=>{
                return item.id !== action.id
            })
            return Object.assign(temp,{users:arr});
        case 'ADD_USER_SELF':
            arr = state.users.map(item=>{
                let e;
                if(item.id === action.id){
                    e = {id:item.id+1}
                }else{
                    e={...item}
                }
                return e
            })
            return Object.assign(temp,{users:arr});
        case'TOGGLE_BACKGROUND':

            return Object.assign({},state,{background:!state.background});
        default:
            return state
    }
}
export default User