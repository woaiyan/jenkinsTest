let nextId = 0
export const add = ()=>{
    return {
        type:"ADD_User",
        id:nextId++
    }
}
export const del = (id)=>{
    return {
        type:"DEL",
        id:id
    }
}
export const addSelf = (id)=>{
    return {
        type:"ADD_USER_SELF",
        id:id
    }
}

export const Toggle = ()=>{
    return {
        type:"TOGGLE_BACKGROUND"
    }
}