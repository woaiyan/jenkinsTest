const List = (state = [], action) => {

    switch (action.type) {
        case 'ADD_List':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ]
        case 'DELETE':
            return state.map(item =>
                (item.id !== action.id)
            )
        case 'FILTER':
            return action.filter
        default:
            return []
    }
}
export default List