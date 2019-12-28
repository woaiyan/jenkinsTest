let nextId = 0
export const add = () => {
    return {
        type: 'ADD_List',
        id: nextId++,
        name:"name"+ nextId
    }
}

export const filter = filter => {
    return {
        type: 'FILTER',
        filter
    }
}

export const del = id => {
    return {
        type: 'DELETE',
        id
    }
}
export const getlist = () => {
    return {
        type: 'CLEAR'

    }
}